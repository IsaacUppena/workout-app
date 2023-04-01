import { LayoutAnimation, View, ViewStyle } from "react-native";
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
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const lastSet = log.sets[log.sets.length - 1];
    const updatedExercise: LoggedExercise = {
      exercise: log.exercise,
      sets: log.sets.concat(lastSet),
    };
    onChange(updatedExercise);
  };

  const handleRemoveSet = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    if (log.sets.length > 1) {
      const updatedExercise: LoggedExercise = {
        exercise: log.exercise,
        sets: log.sets.slice(0, -1),
      };
      onChange(updatedExercise);
    }
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
      <View
        style={{
          width: "80%",
          flexDirection: "row",
          marginVertical: 10,
          justifyContent: "space-around",
          marginHorizontal: "10%",
        }}
      >
        {/* <TouchableWithoutFeedback onPress={handleRemoveSet}> */}
        <View
          style={{
            // backgroundColor: "#FF5555",
            width: 150,
            borderRadius: 5,
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            padding: 3,
          }}
        >
          <FontAwesome5
            name="minus"
            color={COLORS.text}
            size={20}
            onPress={handleRemoveSet}
          />
          <Text text70BO marginH-20 color={COLORS.text}>
            Set
          </Text>
          <FontAwesome5
            name="plus"
            color={COLORS.text}
            size={20}
            onPress={handleAddSet}
          />
        </View>
        {/* </TouchableWithoutFeedback> */}
        {/* <TouchableWithoutFeedback onPress={handleAddSet}> */}
        {/* <View
          style={{
            backgroundColor: "rgba(100, 256, 100, 0.8)",
            width: 150,
            borderRadius: 5,
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            padding: 3,
          }}
        > */}
        {/* <Text text80BO marginR-3 color={COLORS.background}>
              Add
            </Text> */}
        {/* </View> */}
        {/* </TouchableWithoutFeedback> */}
        {/* <TouchableWithoutFeedback onPress={handleRemoveSet}>
          <View
            style={{
              backgroundColor: "#FF5555",
              // width: "80%",
              width: 150,
              borderRadius: 5,
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
              padding: 3,
            }}
          >
            <Text text80BO marginR-3 color={COLORS.background}>
              Remove Set
            </Text>
            <FontAwesome5 name="minus" color={COLORS.background} size={10} />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handleAddSet}>
          <View
            style={{
              backgroundColor: "rgba(100, 256, 100, 0.8)",
              width: 150,
              borderRadius: 5,
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
              padding: 3,
            }}
          >
            <Text text80BO marginR-3 color={COLORS.background}>
              Add Set
            </Text>
            <FontAwesome5 name="plus" color={COLORS.background} size={10} />
          </View>
        </TouchableWithoutFeedback> */}
      </View>
    </View>
  );
}
