import { createStackNavigator } from "@react-navigation/stack";
import ProgressScreen from "../screens/ProgressScreen";
import LogExerciseScreen from "../screens/LogExerciseScreen";
import StackHeader from "../components/StackHeader";
import AddExerciseScreen from "../screens/AddExerciseScreen";
import { Text, View } from "react-native-ui-lib";
import { TouchableOpacity } from "react-native";

const Stack = createStackNavigator();

export default function ProgressNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Progress"
        component={ProgressScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LogExercise"
        component={LogExerciseScreen}
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
    </Stack.Navigator>
  );
}
