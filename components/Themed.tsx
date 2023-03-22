import {
  SegmentedControl as DefaultSegmentedControl,
  View,
  ViewProps,
} from "react-native-ui-lib";
import { Calendar as DefaultCalendar } from "react-native-calendars";
import useColors from "../hooks/useColors";
import { FontAwesome5 } from "@expo/vector-icons";
import { StatusBar } from "react-native";

export function SegmentedControl(props: any) {
  const COLORS = useColors();
  const themedProps = {
    backgroundColor: COLORS.container,
    activeBackgroundColor: COLORS.active,
    activeColor: COLORS.text,
    outlineColor: COLORS.container,
    style: { borderColor: COLORS.container },
    ...props,
  };

  return <DefaultSegmentedControl {...themedProps} />;
}

export function Background(props: ViewProps) {
  const COLORS = useColors();
  const themedProps = {
    backgroundColor: COLORS.background,
    ...props,
  };

  return <View {...themedProps} />;
}

export function Calendar(props: any) {
  const COLORS = useColors();
  const themedProps = {
    theme: {
      calendarBackground: COLORS.background,
      textSectionTitleColor: COLORS.textSecondary,
      textSectionTitleDisabledColor: COLORS.disabled,
      selectedDayBackgroundColor: COLORS.active,
      selectedDayTextColor: COLORS.text,
      todayTextColor: COLORS.active,
      dayTextColor: COLORS.textSecondary,
      textDisabledColor: COLORS.disabled,
      arrowColor: COLORS.inactive,
      monthTextColor: COLORS.text,
      textDayFontWeight: "300",
      textMonthFontWeight: "bold",
      textDayHeaderFontWeight: "300",
      textDayFontSize: 16,
      textMonthFontSize: 16,
      textDayHeaderFontSize: 16,
    },
    ...props,
  };

  return <DefaultCalendar {...themedProps} />;
}
