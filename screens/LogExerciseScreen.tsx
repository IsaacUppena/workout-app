import { Button, FloatingButton, Icon } from "react-native-ui-lib";
import { SegmentedControl, Background } from "../components/Themed";

import { FontAwesome5 } from "@expo/vector-icons";
import useColors from "../hooks/useColors";
import { GestureResponderEvent, View, ViewStyle } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import IconButton from "../components/IconButton";
import { LoggedExercise } from "../models/Log";
import ExerciseCard from "../components/ExerciseCard";

export default function LogExerciseScreen(props: any) {
  const day = props.route.params;
  const COLORS = useColors();

  const containerStyles: ViewStyle = {
    flex: 1,
    width: "100%",
    alignItems: "center",
    // justifyContent: "space-between",
    flexDirection: "column",
  };

  const handleCreateExercise = () => {
    console.log("created exercise");
  };

  const exampleExercises: LoggedExercise[] = [
    {
      exercise: {
        name: "Bench Press",
        primaryMuscle: "pecs",
        secondaryMuscles: ["triceps", "frontDelts"],
        measurements: ["weight", "reps"],
      },
      sets: [
        { reps: 10, weight: 160 },
        { reps: 10, weight: 170 },
        { reps: 8, weight: 180 },
      ],
    },
    {
      exercise: {
        name: "Barbell Squat",
        primaryMuscle: "quads",
        secondaryMuscles: ["hamstrings", "glutes"],
        measurements: ["weight", "reps"],
      },
      sets: [
        { reps: 10, weight: 160, rpe: 7.5 },
        { reps: 10, weight: 170, rpe: 8.5 },
        { reps: 8, weight: 180, rpe: 9.5 },
      ],
    },
    {
      exercise: {
        name: "Dumbbell Clean and Jerk",
        primaryMuscle: "traps",
        secondaryMuscles: ["arms", "quads"],
        measurements: ["weight", "reps"],
      },
      sets: [
        { reps: 10, weight: 160 },
        { reps: 10, weight: 170 },
        { reps: 8, weight: 180 },
      ],
    },
  ];

  return (
    <Background useSafeArea flex>
      <View style={containerStyles}>
        <FlatList
          data={exampleExercises}
          renderItem={({ item, index }) => (
            <View>
              <ExerciseCard log={item} onPress={() => {}} />
            </View>
          )}
          keyExtractor={(item, index) => `${index}`}
        ></FlatList>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 50,
          right: 30,
        }}
      >
        <IconButton
          name="plus"
          color={COLORS.text}
          backgroundColor={COLORS.active}
          size={80}
          onPress={handleCreateExercise}
        />
      </View>
    </Background>
  );
}
