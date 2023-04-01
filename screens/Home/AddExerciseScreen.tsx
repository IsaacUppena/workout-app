import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Text } from "react-native-ui-lib";
import { Background } from "../../components/Themed";
import { Exercise } from "../../models/Exercise";
import { useState, useEffect } from "react";
import Storage from "../../services/ExerciseService";
import { Checkbox } from "react-native-ui-lib";
import useColors from "../../hooks/useColors";
import MuscleChip from "../../components/MuscleChip";
import { TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import Layout from "../../constants/Layout";
import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import SearchStackHeader from "../../components/Headers/SearchStackHeader";
import { StackScreenProps } from "@react-navigation/stack";
import { HomeStackParamList } from "../../navigation/HomeNavigator";
import { useContext } from "react";
import {
  WorkoutContext,
  WorkoutContextType,
} from "../../context/WorkoutContext";
import { LoggedExercise, LoggedSet, LoggedWorkout } from "../../models/Log";
import {
  SettingsContext,
  SettingsContextType,
} from "../../context/SettingsContext";

type ExerciseRowProps = {
  disabled: boolean;
  selected: boolean;
  exercise: Exercise;
  onPress: (exercise: Exercise) => void;
};

const ExerciseRow = (props: ExerciseRowProps) => {
  const { disabled, selected, exercise, onPress } = props;
  const COLORS = useColors();

  const handleOnPress = () => {
    onPress(exercise);
  };

  return (
    <TouchableWithoutFeedback onPress={disabled ? () => {} : handleOnPress}>
      <View
        style={{
          backgroundColor:
            selected || disabled ? COLORS.foreground : COLORS.container,
          height: 80,
          borderRadius: 10,
          paddingHorizontal: 10,
          marginTop: 10,
          width: 0.95 * Layout.window.width,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Checkbox
          size={25}
          value={selected || disabled}
          color={disabled ? COLORS.textTertiary : COLORS.active}
          iconColor={disabled ? COLORS.background : COLORS.text}
          onValueChange={disabled ? () => {} : handleOnPress}
        />
        <View
          style={{
            flex: 1,
            marginLeft: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              // flex: 1,
            }}
          >
            <Text text80BO marginB-3 color={COLORS.text}>
              {exercise.name}
            </Text>
            <MuscleChip muscleName={exercise.primaryMuscle} isPrimary />
          </View>
          <Text text80 color={COLORS.text}>
            {exercise.measurements.join(" • ")}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default function AddExerciseScreen(
  props: StackScreenProps<HomeStackParamList, "AddExercise">
) {
  const { workout, updateWorkout, createWorkout } = useContext(
    WorkoutContext
  ) as WorkoutContextType;

  const { settings } = useContext(SettingsContext) as SettingsContextType;
  const [exercises, setExercises] = useState([] as Exercise[]);
  const [selectedExercises, setSelectedExercises] = useState([] as Exercise[]);

  const COLORS = useColors();

  const updateExercises = async () => {
    const newExercises = await Storage.getExercisesByCriteria();
    setExercises(newExercises);
  };

  const handleOnPressExercise = (exercise: Exercise) => {
    if (!selectedExercises.includes(exercise)) {
      setSelectedExercises(selectedExercises.concat(exercise));
    } else {
      setSelectedExercises(
        selectedExercises.filter((e) => e.id !== exercise.id)
      );
    }
  };

  const generateExercises = (exercises: Exercise[]) => {
    return exercises.map((exercise: Exercise) => {
      let defaultSet: LoggedSet = {};

      for (let measurement of exercise.measurements) {
        defaultSet[measurement] = settings.defaultLoggedSet[measurement];
      }
      return {
        exercise,
        sets: [defaultSet],
      };
    });
  };

  const generateNewWorkout = () => {
    const today = new Date().toLocaleDateString("en-CA");
    const newWorkout = {
      id: 0,
      date: today,
      exercises: generateExercises(selectedExercises),
    };

    Storage.getNewId()
      .then((id) => {
        newWorkout.id = id;
      })
      .catch((err) => {
        throw new Error(err);
      });

    return newWorkout;
  };

  const handleOnAddExercise = () => {
    if (workout !== null) {
      const newLoggedExercises: LoggedExercise[] =
        generateExercises(selectedExercises);
      const newWorkout = {
        ...workout,
        exercises: workout.exercises.concat(newLoggedExercises),
      };
      updateWorkout(newWorkout);
    } else {
      const newWorkout = generateNewWorkout();
      createWorkout(newWorkout);
    }
    props.navigation.goBack();
  };

  useEffect(() => {
    updateExercises();
  });

  return (
    <>
      <SearchStackHeader
        placeholderText="Search exercises"
        onChangeSearchInput={() => {}}
        iconRight="filter"
        onPressIconRight={() => console.log("test")}
        navigation={props.navigation}
      />
      <Background flex useSafeArea>
        <FlatList
          contentContainerStyle={{ alignItems: "center", paddingBottom: 150 }}
          data={exercises}
          renderItem={(data) => {
            const exercises =
              workout?.exercises.map(
                (loggedExercise) => loggedExercise.exercise
              ) ?? [];

            return (
              <ExerciseRow
                selected={selectedExercises.includes(data.item)}
                disabled={exercises.includes(data.item)}
                exercise={data.item}
                onPress={handleOnPressExercise}
              />
            );
          }}
        />
        <LinearGradient
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: 120,
            flexDirection: "row",
            justifyContent: "center",
            paddingTop: 10,
          }}
          locations={[0, 0.7]}
          colors={["transparent", COLORS.background]}
        >
          <TouchableOpacity
            onPress={handleOnAddExercise}
            style={{ display: "flex" }}
          >
            <View
              style={{
                flexDirection: "row",
                padding: 10,
                backgroundColor: COLORS.active,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
              }}
            >
              <FontAwesome5 name="plus" color={COLORS.text} size={16} />
              <Text text70BO marginL-5 color={COLORS.text}>
                Add Exercises ({selectedExercises.length})
              </Text>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </Background>
    </>
  );
}
