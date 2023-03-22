import { Text, ExpandableSection } from "react-native-ui-lib";
import useColors from "../hooks/useColors";
import { LoggedExercise, LoggedSet } from "../models/Log";
import MuscleChip from "./MuscleChip";
import { View } from "react-native";
import { useState } from "react";
import { measurementMap } from "../constants/FieldMap";
import { Measurement } from "../models/Exercise";
import FlexTable from "./FlexTable";
import Layout from "../constants/Layout";

type LoggedExerciseRowProps = {
  exercise: LoggedExercise;
};

const LoggedExerciseHeader = (props: LoggedExerciseRowProps) => {
  const { exercise } = props;
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
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text text70BO color={COLORS.text}>
          {exercise.exercise.name}
        </Text>
        <MuscleChip muscleName={exercise.exercise.primaryMuscle} isPrimary />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text text80BO color={COLORS.textSecondary}>
          {numSets} {numSets > 1 ? "Sets" : "Set"}
        </Text>
        {exercise.exercise.measurements.includes("reps") && (
          <Text text80BO color={COLORS.textSecondary}>
            {" "}
            • {sumMeasurement(exercise.sets, "reps")} Reps
          </Text>
        )}
        {exercise.exercise.measurements.includes("weight") && (
          <Text text80BO color={COLORS.textSecondary}>
            {" "}
            • {sumMeasurement(exercise.sets, "weight")} lbs
          </Text>
        )}
        {exercise.exercise.measurements.includes("calories") && (
          <Text text80BO color={COLORS.textSecondary}>
            {" "}
            • {sumMeasurement(exercise.sets, "calories")} Cal
          </Text>
        )}
        {exercise.exercise.measurements.includes("distance") && (
          <Text text80BO color={COLORS.textSecondary}>
            {" "}
            • {sumMeasurement(exercise.sets, "distance")} yards
          </Text>
        )}
      </View>
    </View>
  );
};

export default function LoggedExerciseRow(props: LoggedExerciseRowProps) {
  const [expandFilters, setExpandFilters] = useState(false);
  const COLORS = useColors();
  const { exercise } = props;

  const columns = Object.keys(exercise.sets[0]).map((measurement) => {
    const measurementDef = measurementMap.get(measurement as Measurement);

    return {
      field: measurement,
      header: measurementDef ? measurementDef.displayName : "Default",
      span: 1,
    };
  });

  return (
    <View
      style={{
        backgroundColor: COLORS.container,
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
      }}
    >
      <ExpandableSection
        expanded={expandFilters}
        sectionHeader={<LoggedExerciseHeader exercise={exercise} />}
        onPress={() => setExpandFilters(expandFilters ? false : true)}
      >
        <View
          style={{
            borderTopWidth: 1,
            borderColor: COLORS.foreground,
            marginTop: 5,
            paddingTop: 5,
            justifyContent: "center",
          }}
        >
          <FlexTable
            columns={columns}
            rows={exercise.sets}
            // width={Layout.window.width * 0.8}
            width="100%"
            headerTextColor={COLORS.textSecondary}
            rowTextColor={COLORS.textTertiary}
            showIndexCol
            indexColHeader="Set"
            altRowColor={COLORS.foreground}
            // alignCols="left"
          />
        </View>
      </ExpandableSection>
    </View>
  );
}
