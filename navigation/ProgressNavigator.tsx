import { createStackNavigator } from "@react-navigation/stack";
import ProgressScreen from "../screens/Progress/ProgressScreen";
import LogExerciseScreen from "../screens/Home/LogExerciseScreen";
import StackHeader from "../components/Headers/StackHeader";
import AddExerciseScreen from "../screens/Home/AddExerciseScreen";
import { Text, View } from "react-native-ui-lib";
import { TouchableOpacity } from "react-native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { useEffect } from "react";

const Stack = createStackNavigator();

export default function ProgressNavigator({ navigation, route }: any) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Auth";

  useEffect(() => {
    console.log(routeName);
    navigation.setOptions({
      tabBarVisible: routeName !== "LogExercise",
    });
  }, [navigation, routeName]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Progress"
        component={ProgressScreen}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
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
      /> */}
    </Stack.Navigator>
  );
}
