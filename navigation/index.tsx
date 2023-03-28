/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import * as React from "react";
import { ColorSchemeName, Pressable, View } from "react-native";
import NotFoundScreen from "../screens/NotFoundScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import ProgressScreen from "../screens/Progress/ProgressScreen";
import LibraryScreen from "../screens/Library/LibraryScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import WheelPickerScreen from "../screens/WheelPickerScreen";
import LinkingConfiguration from "./LinkingConfiguration";
import useColors from "../hooks/useColors";
import ProgressNavigator from "./ProgressNavigator";
import { createStackNavigator } from "@react-navigation/stack";
import HomeNavigator from "./HomeNavigator";
import LogExerciseScreen from "../screens/Home/LogExerciseScreen";
import { LoggedWorkout } from "../models/Log";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  HomeNavigator: { workout?: LoggedWorkout };
};

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      {/* <Stack.Screen name="LogExercise" component={LogExerciseScreen} /> */}
      <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
      {/* <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group> */}
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

export type RootTabParamList = {
  HomeTab: undefined;
  ProgressTab: undefined;
  LibraryTab: undefined;
  ProfileTab: undefined;
};

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const COLORS = useColors();

  return (
    <BottomTab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        tabBarActiveTintColor: COLORS.active,
        tabBarStyle: {
          backgroundColor: COLORS.container,
        },
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          title: "Good Morning",
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="ProgressTab"
        component={ProgressNavigator}
        options={{
          title: "Progress",
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="chart-line" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="LibraryTab"
        component={LibraryScreen}
        options={{
          title: "Library",
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="dumbbell" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="ProfileTab"
        component={WheelPickerScreen}
        options={{
          title: "Profile",
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="user-alt" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome5>["name"];
  color: string;
}) {
  return <FontAwesome5 size={30} style={{ marginBottom: -3 }} {...props} />;
}
