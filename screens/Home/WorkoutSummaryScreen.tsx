import { StackScreenProps } from "@react-navigation/stack";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MuscleAnatomy from "../../components/MuscleAnatomy";
import { Background } from "../../components/Themed";
import useColors from "../../hooks/useColors";
import { MuscleOptions } from "../../models/Exercise";
import { LoggedWorkout } from "../../models/Log";
import { HomeStackParamList } from "../../navigation/HomeNavigator";
import { useContext } from "react";
import {
  WorkoutContext,
  WorkoutContextType,
} from "../../context/WorkoutContext";

export default function WorkoutSummaryScreen(
  props: StackScreenProps<HomeStackParamList, "WorkoutSummary">
) {
  const { workout } = useContext(WorkoutContext) as WorkoutContextType;
  const COLORS = useColors();

  const primaryMuscles = workout?.exercises.map(
    (loggedExercise) => loggedExercise.exercise.primaryMuscle
  );

  const secondaryMuscles = workout?.exercises.flatMap(
    (loggedExercise) => loggedExercise.exercise.secondaryMuscles ?? []
  );

  return (
    <Background useSafeArea flex>
      {primaryMuscles ? (
        <ScrollView>
          <View
            style={{
              backgroundColor: COLORS.container,
              borderRadius: 10,
              padding: 5,
              marginVertical: 20,
              height: 300,
              // width: "95%",
            }}
          >
            <MuscleAnatomy
              primaryMuscles={primaryMuscles}
              secondaryMuscles={secondaryMuscles}
              view={"both"}
            />
          </View>
        </ScrollView>
      ) : (
        <View />
      )}
    </Background>
  );
}
