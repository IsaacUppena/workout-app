import { StackScreenProps } from "@react-navigation/stack";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MuscleAnatomy from "../../components/MuscleAnatomy";
import { Background } from "../../components/Themed";
import useColors from "../../hooks/useColors";
import { MuscleOptions } from "../../models/Exercise";
import { LoggedWorkout } from "../../models/Log";
import { HomeStackParamList } from "../../navigation/HomeNavigator";

export default function WorkoutSummaryScreen(
  props: StackScreenProps<HomeStackParamList, "WorkoutSummary">
) {
  const { selectedWorkout } = props.route.params;
  const workout = selectedWorkout as LoggedWorkout;
  const COLORS = useColors();

  const primaryMuscles: MuscleOptions[] = workout.exercises.map(
    (loggedExercise) => loggedExercise.exercise.primaryMuscle
  );

  const secondaryMuscles: MuscleOptions[] = workout.exercises.flatMap(
    (loggedExercise) => loggedExercise.exercise.secondaryMuscles ?? []
  );

  return (
    <Background useSafeArea flex>
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
    </Background>
  );
}
