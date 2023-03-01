import { SegmentedControl, Background } from "../components/Themed";

import MuscleAnatomy from "../components/MuscleAnatomy";

export default function LibraryScreen() {
  return (
    <Background useSafeArea flex>
      <SegmentedControl
        segments={[{ label: "Exercises" }, { label: "Workouts" }]}
      />
      <MuscleAnatomy primaryMuscles={["pecs", "biceps"]} view="front" />
    </Background>
  );
}
