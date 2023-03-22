import { View, StyleSheet, SectionList } from "react-native";
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

export default function HomeScreen() {
  const COLORS = useColors();

  return (
    <Background useSafeArea flex>
      {/* <View style={{ justifyContent: "flex-end" }}> */}
      <Text text30BO margin-20 center color={COLORS.active}>
        Exercises
      </Text>
      <ScrollableCalendar />
      {/* </View> */}
    </Background>
  );
}
