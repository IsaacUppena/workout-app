import { createStackNavigator } from "@react-navigation/stack";
import ProgressScreen from "../screens/ProgressScreen";
import EditWorkoutScreen from "../screens/LogExerciseScreen";
import StackHeader from "../components/StackHeader";
import AddExerciseScreen from "../screens/AddExerciseScreen";
import { Text, View } from "react-native-ui-lib";
import { TouchableOpacity } from "react-native";
import CalendarList from "react-native-calendars/src/calendar-list/new";
import WorkoutSummaryScreen from "../screens/WorkoutSummaryScreen";
import CalendarListModal from "../screens/CalendarListModal";

const Stack = createStackNavigator();

export default function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EditWorkout"
        component={EditWorkoutScreen}
        options={{
          header: (headerProps) => {
            return <StackHeader {...headerProps} />;
          },
        }}
      />
      <Stack.Screen
        name="AddExerciseModal"
        component={AddExerciseScreen}
        options={{
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="WorkoutSummaryModal"
        component={WorkoutSummaryScreen}
        options={{
          header: (headerProps) => {
            return <StackHeader {...headerProps} />;
          },
        }}
      />
      <Stack.Screen
        name="CalendarListModal"
        component={CalendarListModal}
        options={{
          header: (headerProps) => {
            return <StackHeader {...headerProps} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
