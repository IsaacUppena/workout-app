import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Text } from "react-native-ui-lib";
import { Background } from "../../components/Themed";
import { Exercise } from "../../models/Exercise";
import { useState, useEffect } from "react";
import { getExercisesByCriteria } from "../../services/ExerciseService";
import { ListRenderItemInfo } from "react-native";
import { Checkbox } from "react-native-ui-lib";
import useColors from "../../hooks/useColors";
import MuscleChip from "../../components/MuscleChip";
import { TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import Layout from "../../constants/Layout";
import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

type ExerciseRowProps = {
  selected: boolean;
  exercise: Exercise;
  onPress: (exercise: Exercise) => void;
};

const ExerciseRow = (props: ExerciseRowProps) => {
  const { selected, exercise, onPress } = props;
  const COLORS = useColors();

  const handleOnPress = () => {
    onPress(exercise);
  };

  return (
    <TouchableWithoutFeedback
      // style={{ marginVertical: 5 }}
      onPress={handleOnPress}
    >
      <View
        style={{
          backgroundColor: COLORS.container,
          height: 80,
          borderRadius: 10,
          paddingHorizontal: 20,
          // paddingVertical: 5,
          // width: "90%",
          marginTop: 10,
          width: 0.95 * Layout.window.width,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderWidth: 2,
          borderColor: selected ? COLORS.active : COLORS.container,
        }}
      >
        <View
          style={{
            justifyContent: "space-between",
          }}
        >
          <Text text70BO marginB-3 color={COLORS.text}>
            {exercise.name}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <MuscleChip muscleName={exercise.primaryMuscle} isPrimary />
            <Text text70 marginL-5 color={COLORS.text}>
              {exercise.measurements.join(" • ")}
            </Text>
          </View>
        </View>
        <Checkbox
          size={30}
          value={selected}
          color={COLORS.active}
          onValueChange={handleOnPress}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default function AddExerciseScreen() {
  const [exercises, setExercises] = useState([] as Exercise[]);
  const [selectedExercises, setSelectedExercises] = useState([] as Exercise[]);
  const COLORS = useColors();

  const updateExercises = async () => {
    const newExercises = await getExercisesByCriteria();
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
    // console.log(selectedExercises);
  };

  const handleOnAddExercise = () => {
    console.log("Added exercises");
  };

  useEffect(() => {
    updateExercises();
  });

  return (
    <Background flex useSafeArea>
      <FlatList
        contentContainerStyle={{ alignItems: "center" }}
        data={exercises}
        renderItem={(data) => (
          <ExerciseRow
            selected={selectedExercises.includes(data.item)}
            exercise={data.item}
            onPress={handleOnPressExercise}
          />
        )}
      />
      {/* <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: 120,
          backgroundColor: "#FFF",
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: 20,
        }}
      > */}
      <LinearGradient
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: 200,
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: 80,
        }}
        locations={[0, 0.8]}
        colors={["transparent", COLORS.background]}
      >
        <TouchableOpacity onPress={handleOnAddExercise}>
          <View
            style={{
              flexDirection: "row",
              padding: 15,
              backgroundColor: COLORS.active,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
            }}
          >
            <Text text60BO marginR-5 color={COLORS.text}>
              ({selectedExercises.length}) Add Exercises
            </Text>
            <FontAwesome5 name="plus" color={COLORS.text} size={16} />
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </Background>
  );
}
