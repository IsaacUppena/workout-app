import {
  Button,
  Fader,
  FloatingButton,
  Gradient,
  Icon,
  Incubator,
  Text,
} from "react-native-ui-lib";
import { SegmentedControl, Background } from "../../components/Themed";

import { DialogHeaderProps } from "react-native-ui-lib/src/incubator";

import { FontAwesome5 } from "@expo/vector-icons";
import useColors from "../../hooks/useColors";
import {
  GestureResponderEvent,
  Pressable,
  TouchableHighlight,
  View,
  ViewStyle,
} from "react-native";
import {
  FlatList,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import IconButton from "../../components/IconButton";
import { LoggedExercise, LoggedWorkout } from "../../models/Log";
import ExerciseCard from "../../components/ExerciseCard";
import Layout from "../../constants/Layout";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useEffect, useContext } from "react";

import exampleWorkout from "../../constants/ExampleWorkout";

import { StackScreenProps } from "@react-navigation/stack";
import { HomeStackParamList } from "../../navigation/HomeNavigator";
import {
  WorkoutContext,
  WorkoutContextType,
} from "../../context/WorkoutContext";

export default function LogExerciseScreen(
  props: StackScreenProps<HomeStackParamList, "EditWorkout">
) {
  const { workout, updateWorkout, createWorkout } = useContext(
    WorkoutContext
  ) as WorkoutContextType;
  const [selectedWorkout, setSelectedWorkout] = useState(workout);

  const { route, navigation } = props;

  const selectedExercises = selectedWorkout?.exercises;

  const COLORS = useColors();

  const containerStyles: ViewStyle = {
    flex: 1,
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
  };

  useEffect(() => {
    if (selectedWorkout) {
      updateWorkout(selectedWorkout);
    }
  }, [selectedWorkout]);

  useEffect(() => {
    if (workout) {
      setSelectedWorkout(workout);
    }
  }, [workout]);

  // At what point do we actually create a new workout in the DB?
  // What is the minimal requirements for LoggedWorkout type? A date and empty logged Exercise array
  // We don't want to create a workout with no exercises, so we need at least one exercise
  // What are the minimal requirements for a LoggedExercise? An exercise and empty LoggedSet array
  // Therefore we need an exercise to be selected, and we want at least on Logged Set
  // Logged set is auto populated by default based on the last set performed/default setting
  // There will never be an exercise created that has zero logged sets, but what if the user tries to exit without entering a value? go back to previous default (exists in context/db)
  // When do we consider an workout created? (update context/DB) - When it has at least one exercise, logged set will be auto populated
  // When do we consider an workout updated? (update context/DB) - Whenever any value in any logged set, or any value in the logged exercise, is updated to a truthy value

  // useEffect(
  //   () =>
  //     navigation.addListener("beforeRemove", (e) => {
  //       // the navigation.navigate will fire beforeRemove which causes an infinite loop. we guard this here
  //       if (e.data.action.type === "NAVIGATE") {
  //         return;
  //       }
  //       // Prevent default behavior of leaving the screen
  //       console.log(workout.id);
  //       e.preventDefault();

  //       // navigate manually
  //       // navigation.navigate({
  //       //     name: 'Home',
  //       //     params: { post: postText },
  //       //     merge: true,
  //       // });
  //       // navigation.navigate("HomeNavigator", {
  //       //   screen: "EditWorkout",
  //       //   params: {
  //       //     selectedWorkout,
  //       //   },
  //       // });

  //       navigation.navigate("Root", {
  //         name: "HomeTab",
  //         params: { workout },
  //       });
  //     }),
  //   [navigation]
  // );

  const handleAddExercise = () => {
    console.log("created exercise");
    props.navigation.navigate("AddExercise");
  };

  const handleExerciseChange = (newExercise: LoggedExercise) => {};

  return (
    <Background useSafeArea flex>
      {selectedExercises ? (
        <>
          <View style={containerStyles}>
            <FlatList
              contentContainerStyle={{
                paddingBottom:
                  selectedExercises[selectedExercises.length - 1].sets.length *
                    5 +
                  90,
              }}
              // contentOffset={{ x: 0, y: 200 }}
              data={selectedExercises}
              renderItem={({ item, index }) => (
                <View style={{ marginTop: 10 }}>
                  <ExerciseCard log={item} onChange={handleExerciseChange} />
                </View>
              )}
              keyExtractor={(item, index) => `${index}`}
            />
          </View>
          <LinearGradient
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              height: 160,
              flexDirection: "row",
              justifyContent: "center",
              paddingTop: 40,
            }}
            locations={[0, 0.8]}
            colors={["transparent", COLORS.background]}
          >
            <Pressable onPress={handleAddExercise}>
              <View
                style={{
                  flexDirection: "row",
                  padding: 10,
                  backgroundColor: COLORS.active,
                  width: 150,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                }}
              >
                <Text text70BO marginR-5 color={COLORS.text}>
                  Add Exercise
                </Text>
                <FontAwesome5 name="plus" color={COLORS.text} />
              </View>
            </Pressable>
          </LinearGradient>
        </>
      ) : (
        <TouchableWithoutFeedback
          style={{ width: "100%", height: "100%" }}
          onPress={handleAddExercise}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text text70BO marginR-5 color={COLORS.text}>
              No Exercises Yet
            </Text>
            <FontAwesome5 name="plus" color={COLORS.text} />
          </View>
        </TouchableWithoutFeedback>
      )}
    </Background>
  );
}
