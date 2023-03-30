import { FontAwesome5 } from "@expo/vector-icons";
import { View, ViewStyle } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import useColors from "../hooks/useColors";
import CalendarStrip from "react-native-calendar-strip";
import { Text } from "react-native-ui-lib";
import { LoggedExercise, LoggedSet, LoggedWorkout } from "../models/Log";
import exampleWorkout from "../constants/ExampleWorkout";
import MuscleChip from "./MuscleChip";
import Layout from "../constants/Layout";
import { useEffect, useState, useContext } from "react";
import { getWorkoutByDate } from "../services/ExerciseService";
import { Moment } from "moment";
import LoggedExerciseRow from "./LoggedExerciseRow";
import { WorkoutContext, WorkoutContextType } from "../context/WorkoutContext";

type SortableCalendarProps = {
  // selectedWorkout: LoggedWorkout;
  handleOnPressEdit: () => void;
  handleOnPressSummary: () => void;
  handleOnPressCalendar: () => void;
  // handleOnChangeWorkout: (workout: LoggedWorkout) => void;
};

export default function SortableCalendar(props: SortableCalendarProps) {
  const { workout, setNewWorkout } = useContext(
    WorkoutContext
  ) as WorkoutContextType;
  const [date, setDate] = useState(new Date());
  const [selectedWorkout, setSelectedWorkout] = useState(workout);
  const COLORS = useColors();

  const {
    // selectedWorkout,
    handleOnPressEdit,
    handleOnPressSummary,
    // handleOnChangeWorkout,
    handleOnPressCalendar,
  } = props;

  const updateWorkout = async () => {
    const formattedDate = date.toLocaleDateString("en-CA");
    const newWorkout = await getWorkoutByDate(formattedDate);

    console.log(newWorkout.id);
    setSelectedWorkout(newWorkout);
    setNewWorkout(newWorkout);
    // handleOnChangeWorkout(newWorkout);
  };

  useEffect(() => {
    updateWorkout();
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

  const exampleExercises = exampleWorkout.exercises;

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
        {selectedWorkout.exercises ? (
          <ScrollView>
            {selectedWorkout.exercises.map((exercise, index) => (
              <LoggedExerciseRow key={index} exercise={exercise} />
            ))}
          </ScrollView>
        ) : (
          <View
            style={{
              height: 250,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: COLORS.foreground,
              padding: 10,
            }}
          >
            <Text text50BO color={COLORS.textSecondary}>
              No Exercises
            </Text>
            <Text text90 color={COLORS.textTertiary}>
              You haven't added any exercises to this day
            </Text>
          </View>
        )}
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
              <FontAwesome5 name="info-circle" color={COLORS.text} size={15} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
