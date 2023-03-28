import { createStackNavigator } from "@react-navigation/stack";
import ProgressScreen from "../screens/Progress/ProgressScreen";
import EditWorkoutScreen from "../screens/Home/LogExerciseScreen";
import StackHeader from "../components/Headers/StackHeader";
import AddExerciseScreen from "../screens/Home/AddExerciseScreen";
import { Text, View } from "react-native-ui-lib";
import { TouchableOpacity } from "react-native";
import CalendarList from "react-native-calendars/src/calendar-list/new";
import WorkoutSummaryScreen from "../screens/Home/WorkoutSummaryScreen";
import CalendarListModal from "../screens/Home/CalendarListModal";
import { LoggedWorkout } from "../models/Log";
import TextStackHeader from "../components/Headers/TextStackHeader";

export type HomeStackParamList = {
  EditWorkout: { selectedWorkout: LoggedWorkout };
  AddExercise: { selectedWorkout: LoggedWorkout };
  WorkoutSummary: { selectedWorkout: LoggedWorkout };
  CalendarList: { selectedWorkout: LoggedWorkout };
};

const Stack = createStackNavigator<HomeStackParamList>();

export default function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EditWorkout"
        component={EditWorkoutScreen}
        options={{
          header: (headerProps) => {
            const { route } = headerProps;
            const date = new Date(route.params?.selectedWorkout.date);
            const dateStr = date.toLocaleDateString();

            return <TextStackHeader title={dateStr} {...headerProps} />;
          },
        }}
      />
      <Stack.Screen
        name="AddExercise"
        component={AddExerciseScreen}
        options={{
          header: (headerProps) => {
            return <TextStackHeader title="Add Exercise" {...headerProps} />;
          },
        }}
      />
      <Stack.Screen
        name="WorkoutSummary"
        component={WorkoutSummaryScreen}
        options={{
          header: (headerProps) => {
            const { route } = headerProps;
            const date = new Date(route.params?.selectedWorkout.date);
            const dateStr = date.toLocaleDateString();

            return (
              <TextStackHeader title={`${dateStr} Summary`} {...headerProps} />
            );
          },
        }}
      />
      <Stack.Screen
        name="CalendarList"
        component={CalendarListModal}
        options={{
          header: (headerProps) => {
            return <TextStackHeader title="" {...headerProps} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
