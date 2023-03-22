import { View, StyleSheet, SectionList, SafeAreaView } from "react-native";
import {
  Agenda,
  AgendaEntry,
  AgendaSchedule,
  CalendarProvider,
  DateData,
  ExpandableCalendar,
  WeekCalendar,
} from "react-native-calendars";
import { SegmentedControl, Background } from "../components/Themed";
import useColors from "../hooks/useColors";
import { useState } from "react";
import { Text } from "react-native-ui-lib";
import { TouchableOpacity } from "react-native-gesture-handler";
import CalendarStrip from "react-native-calendar-strip";
import { FontAwesome5 } from "@expo/vector-icons";

import ScrollableCalendar from "../components/ScrollableCalendar";
import { LoggedWorkout } from "../models/Log";

export default function HomeScreen(props: any) {
  const [selectedWorkout, setSelectedWorkout] = useState({} as LoggedWorkout);
  const COLORS = useColors();

  const handleOnPressEdit = () => {
    // console.log("selected day", day);
    // props.navigation.navigate("EditWorkout", selectedWorkout);

    props.navigation.navigate("HomeNavigator", {
      screen: "EditWorkout",
      params: {
        selectedWorkout,
        // screen: "LogExercise",
        // params: {
        //   selectedWorkout,
        // },
      },
    });
  };

  const handleOnPressSummary = () => {
    props.navigation.navigate("HomeNavigator", {
      screen: "WorkoutSummaryModal",
      params: {
        selectedWorkout,

        // screen: "LogExercise",
        // params: {
        //   selectedWorkout,
        // },
      },
    });
  };

  const handleOnPressCalendar = () => {
    props.navigation.navigate("HomeNavigator", {
      screen: "CalendarListModal",
      params: {
        selectedWorkout,
        // screen: "LogExercise",
        // params: {
        //   selectedWorkout,
        // },
      },
    });
  };

  const handleOnChangeWorkout = (workout: LoggedWorkout) => {
    setSelectedWorkout(workout);
  };

  return (
    <Background useSafeArea flex>
      {/* <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.container }}> */}
      {/* <Text text30BO center color={COLORS.background}>
        LOG
      </Text> */}
      <ScrollableCalendar
        selectedWorkout={selectedWorkout}
        handleOnChangeWorkout={handleOnChangeWorkout}
        handleOnPressEdit={handleOnPressEdit}
        handleOnPressSummary={handleOnPressSummary}
        handleOnPressCalendar={handleOnPressCalendar}
      />
      {/* </View> */}
      {/* </SafeAreaView> */}
    </Background>
  );
}
