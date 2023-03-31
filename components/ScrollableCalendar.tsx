import { FontAwesome5 } from "@expo/vector-icons";
import { View, ViewStyle } from "react-native";
import {
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import useColors from "../hooks/useColors";
import CalendarStrip from "react-native-calendar-strip";
import { Text } from "react-native-ui-lib";
import { LoggedExercise, LoggedSet, LoggedWorkout } from "../models/Log";
import exampleWorkout from "../constants/ExampleWorkout";
import MuscleChip from "./MuscleChip";
import Layout from "../constants/Layout";
import { useEffect, useState, useContext } from "react";
import Storage from "../services/ExerciseService";
import { Moment } from "moment";
import LoggedExerciseRow from "./LoggedExerciseRow";
import { WorkoutContext, WorkoutContextType } from "../context/WorkoutContext";

type SortableCalendarProps = {
  // selectedWorkout: LoggedWorkout;
  handleOnPressEdit: () => void;
  handleOnPressSummary: () => void;
  handleOnPressCalendar: () => void;
  handleCreateWorkout: () => void;
  // handleOnChangeWorkout: (workout: LoggedWorkout) => void;
};

export default function SortableCalendar(props: SortableCalendarProps) {
  const { workout, switchWorkout } = useContext(
    WorkoutContext
  ) as WorkoutContextType;
  const [date, setDate] = useState(new Date());
  const [selectedWorkout, setSelectedWorkout] = useState<LoggedWorkout | null>(
    null
  );
  const COLORS = useColors();

  // console.log(workout);
  // console.log(selectedWorkout);

  const {
    // selectedWorkout,
    handleOnPressEdit,
    handleOnPressSummary,
    // handleOnChangeWorkout,
    handleOnPressCalendar,
    handleCreateWorkout,
  } = props;

  const switchSelectedWorkout = async () => {
    const formattedDate = date.toLocaleDateString("en-CA");
    const newWorkout = await Storage.getWorkoutByDate(formattedDate);

    setSelectedWorkout(newWorkout);
    switchWorkout(newWorkout);
  };

  useEffect(() => {
    switchSelectedWorkout();
  }, [date]);

  const handleDateChange = (newDate: Moment) => {
    setDate(new Date(newDate.valueOf()));
  };
  const handleWeekChange = (start: Moment, end: Moment) => {};
  const handleOpenCalendar = (dates: {
    weekStartDate: Moment;
    weekEndDate: Moment;
  }) => {
    handleOnPressCalendar();
  };

  const buttonStyles: ViewStyle = {
    backgroundColor: COLORS.active,
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    width: Layout.window.width / 2.2,
    marginRight: 10,
  };

  // May want to use FlatList instead of ScrollView, can compare performance

  return (
    <View
      style={{
        backgroundColor: COLORS.background,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        padding: 15,
        flex: 1,
      }}
    >
      <CalendarStrip
        scrollable
        scrollerPaging
        calendarAnimation={{ type: "sequence", duration: 30 }}
        daySelectionAnimation={{
          type: "background",
          duration: 300,
          highlightColor: "#FFF",
        }}
        style={{
          height: 80,
        }}
        calendarHeaderStyle={{ color: COLORS.text, fontSize: 20 }}
        dateNumberStyle={{ color: COLORS.text }}
        dateNameStyle={{ color: COLORS.text }}
        iconContainer={{ flex: 0.1 }}
        iconStyle={{ color: COLORS.text }}
        leftSelector={
          <FontAwesome5 color={COLORS.text} name="angle-left" size={20} />
        }
        rightSelector={
          <FontAwesome5 color={COLORS.text} name="angle-right" size={20} />
        }
        // customDatesStyles={this.state.customDatesStyles}
        highlightDateNameStyle={{ color: COLORS.text }}
        highlightDateNumberStyle={{ color: COLORS.text }}
        highlightDateContainerStyle={{ backgroundColor: COLORS.active }}
        // markedDates={this.state.markedDates}
        // datesBlacklist={this.datesBlacklistFunc}
        selectedDate={date}
        onDateSelected={handleDateChange}
        onWeekChanged={handleWeekChange}
        onHeaderSelected={handleOpenCalendar}
        useIsoWeekday={false}
      />
      <View
        style={{
          // alignItems: "center",
          // flexDirection: "row",
          justifyContent: "space-around",
          flex: 1,
          // backgroundColor: COLORS.foreground,
        }}
      >
        {selectedWorkout !== null ? (
          <>
            <ScrollView>
              {selectedWorkout.exercises.map((exercise, index) => (
                <LoggedExerciseRow key={index} exercise={exercise} />
              ))}
            </ScrollView>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                style={{ marginTop: 10 }}
                onPress={handleOnPressEdit}
              >
                <View style={buttonStyles}>
                  <Text text70BO marginR-8 color={COLORS.text}>
                    Edit
                  </Text>
                  <FontAwesome5 name="edit" color={COLORS.text} size={15} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginTop: 10 }}
                onPress={handleOnPressSummary}
              >
                <View style={buttonStyles}>
                  <Text text70BO marginR-8 color={COLORS.text}>
                    Summary
                  </Text>
                  <FontAwesome5
                    name="info-circle"
                    color={COLORS.text}
                    size={15}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <TouchableWithoutFeedback
            onPress={handleCreateWorkout}
            style={{ height: "100%" }}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: COLORS.container,
                borderRadius: 20,
              }}
            >
              <Text text50BO marginB-20 color={COLORS.textSecondary}>
                Log a New Workout
              </Text>
              <FontAwesome5
                name="plus"
                color={COLORS.textSecondary}
                size={80}
              />
              {/* <Text text90 color={COLORS.textTertiary}>
                  You didn't workout on this day
                </Text> */}
            </View>
          </TouchableWithoutFeedback>
        )}
      </View>
    </View>
  );
}
