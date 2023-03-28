import {
  SegmentedControl,
  Calendar,
  Background,
} from "../../components/Themed";

export default function ProgressScreen(props: any) {
  // Workout days are marked, days with notes have dot

  const handleDayPress = (day: Object) => {
    console.log("selected day", day);
    props.navigation.navigate("LogExercise", day);
  };

  return (
    <Background useSafeArea flex>
      <SegmentedControl
        segments={[{ label: "Progress" }, { label: "Charts" }]}
      />
      <Calendar
        style={{
          height: 350,
          marginTop: "20%",
        }}
        onDayPress={handleDayPress}
      />
    </Background>
  );
}
