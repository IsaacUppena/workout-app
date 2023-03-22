import { FontAwesome5 } from "@expo/vector-icons";
import { View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import useColors from "../hooks/useColors";
import CalendarStrip from "react-native-calendar-strip";
import { Text } from "react-native-ui-lib";
import { LoggedExercise, LoggedSet, LoggedWorkout } from "../models/Log";
import exampleWorkout from "../constants/ExampleWorkout";
import MuscleChip from "./MuscleChip";
import Layout from "../constants/Layout";
import { useEffect, useState } from "react";
import { getWorkoutByDate } from "../services/ExerciseService";
import { Moment } from "moment";

const ExerciseRow = ({ exercise }: { exercise: LoggedExercise }) => {
  const COLORS = useColors();
  const numSets = exercise.sets.length;

  const sumMeasurement = (sets: LoggedSet[], measurementName: string) => {
    let sum = 0;
    for (let set of sets) {
      sum += set[measurementName] ?? 0;
    }
    return sum;
  };

  return (
    <View
      style={{
        // height: 50,
        backgroundColor: COLORS.foreground,
        width: "100%",
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text text70BO color={COLORS.textSecondary}>
          {exercise.exercise.name}
        </Text>
        <MuscleChip muscleName={exercise.exercise.primaryMuscle} isPrimary />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text text80BO color={COLORS.textTertiary}>
          {numSets} {numSets > 1 ? "Sets" : "Set"}
        </Text>
        {exercise.exercise.measurements.includes("reps") && (
          <Text text80BO color={COLORS.textTertiary}>
            {" "}
            • {sumMeasurement(exercise.sets, "reps")} Reps
          </Text>
        )}
        {exercise.exercise.measurements.includes("weight") && (
          <Text text80BO color={COLORS.textTertiary}>
            {" "}
            • {sumMeasurement(exercise.sets, "weight")} lbs
          </Text>
        )}
        {exercise.exercise.measurements.includes("calories") && (
          <Text text80BO color={COLORS.textTertiary}>
            {" "}
            • {sumMeasurement(exercise.sets, "calories")} Cal
          </Text>
        )}
        {exercise.exercise.measurements.includes("distance") && (
          <Text text80BO color={COLORS.textTertiary}>
            {" "}
            • {sumMeasurement(exercise.sets, "distance")} yards
          </Text>
        )}
      </View>
    </View>
  );
};

export default function SortableCalendar() {
  const [workout, setWorkout] = useState({} as LoggedWorkout);
  const [date, setDate] = useState(new Date());
  const COLORS = useColors();

  const updateWorkout = async () => {
    const formattedDate = date.toLocaleDateString("en-CA");
    const newWorkout = await getWorkoutByDate(formattedDate);
    setWorkout(newWorkout);
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
    console.log("Opened calendar");
  };

  const exampleExercises = exampleWorkout.exercises;

  return (
    <View
      style={{
        backgroundColor: COLORS.container,
        borderRadius: 10,
        padding: 15,
        flex: 1,
      }}
    >
      {/* <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        <TouchableOpacity onPress={() => console.log("test")}>
          <FontAwesome5 name="expand-alt" color={COLORS.text} size={20} />
        </TouchableOpacity>
      </View> */}
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
        {workout.exercises ? (
          <ScrollView>
            {workout.exercises.map((exercise, index) => (
              <ExerciseRow key={index} exercise={exercise} />
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
          <TouchableOpacity style={{ marginTop: 10 }}>
            <View
              style={{
                backgroundColor: COLORS.active,
                borderRadius: 10,
                height: 50,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
                width: Layout.window.width / 2.2,
                marginRight: 10,
              }}
            >
              <Text text70BO marginR-8 color={COLORS.text}>
                Edit
              </Text>
              <FontAwesome5 name="edit" color={COLORS.text} size={15} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginTop: 10 }}>
            <View
              style={{
                backgroundColor: COLORS.active,
                borderRadius: 10,
                height: 50,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
                width: Layout.window.width / 2.2,
              }}
            >
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
