import { View } from "react-native";
import MuscleAnatomy from "../components/MuscleAnatomy";
import { Background } from "../components/Themed";

export default function WorkoutSummaryScreen(props: any) {
  return (
    <Background useSafeArea flex>
      <MuscleAnatomy primaryMuscles={["pecs"]} view={"both"} />
    </Background>
  );
}
