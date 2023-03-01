import { View, ViewStyle } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import useColors from "../hooks/useColors";
import Layout from "../constants/Layout";
import { LoggedExercise, LoggedSet } from "../models/Log";
import { Chip, Drawer, GridList, GridView, Text } from "react-native-ui-lib";
import MuscleChip from "./MuscleChip";
import { Measurements, MuscleOptions } from "../models/Exercise";
// import { Col, Grid, Row } from "./Grid";
import Grid from "./Table";
import Table from "./Table";
import { FontAwesome5 } from "@expo/vector-icons";
import FlexTable from "./FlexTable";

import { measurementMap } from "../constants/FieldMap";

type ExerciseCardProps = {
  log: LoggedExercise;
  onPress: Function;
};

export default function ExerciseCard(props: ExerciseCardProps) {
  const { log, onPress } = props;
  const COLORS = useColors();

  const cardBackgroundStyles: ViewStyle = {
    backgroundColor: COLORS.container,
    width: 0.9 * Layout.window.width,
    borderRadius: 25,
    padding: 15,
    // marginVertical: 20,
  };

  const cardHeaderStyles: ViewStyle = {
    // width: 340,
    flexDirection: "row",
    alignItems: "center",
  };

  const cardContentStyles: ViewStyle = {
    backgroundColor: COLORS.container,
    flexDirection: "row",
    marginTop: 20,
    // justifyContent: "center",
  };

  const pictureStyles = {
    width: 80,
    height: 80,
    backgroundColor: COLORS.background,
    borderRadius: 10,
    marginRight: 10,
  };

  const columns = Object.keys(log.sets[0]).map((measurement) => {
    const measurementDef = measurementMap.get(measurement as Measurements);

    return {
      field: measurement,
      header: measurementDef ? measurementDef.displayName : "Default",
      span: 1,
    };
  });

  const { primaryMuscle, secondaryMuscles } = log.exercise;

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
    <Drawer
      style={{ borderRadius: 25, margin: 15 }}
      rightItems={[
        {
          background: "red",
          onPress: () => console.log("Delete"),
          customElement: test,
        },
      ]}
    >
      {/* <TouchableOpacity onPress={() => onPress}> */}
      <View style={cardBackgroundStyles}>
        <View style={cardHeaderStyles}>
          {/* <View style={pictureStyles} /> */}
          <View>
            <Text text50BO marginB-8 color={COLORS.text}>
              {log.exercise.name}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <MuscleChip
                muscleName={primaryMuscle}
                isPrimary
                containerStyle={{ marginRight: 5 }}
              />
              {secondaryMuscles
                ? secondaryMuscles.map((muscle: MuscleOptions, index) => (
                    <MuscleChip
                      key={index}
                      muscleName={muscle}
                      containerStyle={{ marginRight: 5 }}
                    />
                  ))
                : ""}
            </View>
          </View>
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
      </View>
    </Drawer>
  );
}
