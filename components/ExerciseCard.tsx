import { View, ViewStyle } from "react-native";
import {
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import useColors from "../hooks/useColors";
import Layout from "../constants/Layout";
import { LoggedExercise, LoggedSet } from "../models/Log";
import { Chip, Drawer, GridList, GridView, Text } from "react-native-ui-lib";
import MuscleChip from "./MuscleChip";
import { Measurement, MuscleOptions } from "../models/Exercise";
// import { Col, Grid, Row } from "./Grid";
import Grid from "./Table";
import Table from "./Table";
import { FontAwesome5 } from "@expo/vector-icons";
import FlexTable from "./FlexTable";

import { measurementMap } from "../constants/FieldMap";

type ExerciseCardProps = {
  log: LoggedExercise;
  onChange: (updatedExercise: LoggedExercise) => void;
};

export default function ExerciseCard(props: ExerciseCardProps) {
  const { log, onChange } = props;
  const COLORS = useColors();

  const cardBackgroundStyles: ViewStyle = {
    backgroundColor: COLORS.background,
    width: Layout.window.width,
  };

  const cardHeaderStyles: ViewStyle = {
    backgroundColor: COLORS.container,
    padding: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const cardContentStyles: ViewStyle = {
    flexDirection: "row",
    justifyContent: "center",
  };

  const columns = Object.keys(log.sets[0]).map((measurement) => {
    const measurementDef = measurementMap.get(measurement as Measurement);

    return {
      field: measurement,
      header: measurementDef ? measurementDef.displayName : "Default",
      span: 1,
    };
  });

  const { primaryMuscle, secondaryMuscles } = log.exercise;

  const handleAddSet = () => {
    console.log("Added Set");
  };

  const test = (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <FontAwesome5 name="trash-alt" size={30} color={COLORS.text} />
      <Text text60BO marginT-5 color={COLORS.text}>
        Delete
      </Text>
    </View>
  );
  return (
    <View style={cardBackgroundStyles}>
      <View style={cardHeaderStyles}>
        <Text text70BO color={COLORS.text}>
          {log.exercise.name}
        </Text>
        <MuscleChip muscleName={primaryMuscle} isPrimary />
      </View>
      <View style={cardContentStyles}>
        <FlexTable
          columns={columns}
          rows={log.sets}
          width={324}
          headerTextColor={COLORS.text}
          rowTextColor={COLORS.textSecondary}
          showIndexCol
          indexColHeader="Set"
        />
      </View>
      <TouchableWithoutFeedback onPress={handleAddSet}>
        <View
          style={{
            backgroundColor: COLORS.foreground,
            width: "80%",
            borderRadius: 10,
            marginHorizontal: "10%",
            marginVertical: 10,
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            padding: 2,
          }}
        >
          <FontAwesome5 name="plus" color={COLORS.text} size={10} />
          <Text text80BO marginL-3 color={COLORS.text}>
            Add Set
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
