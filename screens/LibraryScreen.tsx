import { SegmentedControl, Background } from "../components/Themed";

import MuscleAnatomy from "../components/MuscleAnatomy";
import { useCallback, useRef, useState } from "react";
import {
  FlatList,
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import {
  SectionList,
  StatusBar,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { ExpandableSection, Text, TextField } from "react-native-ui-lib";
import useColors from "../hooks/useColors";
import { FontAwesome5 } from "@expo/vector-icons";
import Chip from "../components/Chip";
import ExerciseFilters from "../components/ExerciseFilters";
import ExerciseRow from "../components/ExerciseRow";
import Layout from "../constants/Layout";
import { MuscleGroup, MuscleOptions, muscleGroups } from "../models/Exercise";
import { muscleGroupMap } from "../constants/MuscleMap";

type MuscleGroupButtonProps = {
  muscleGroup: MuscleGroup;
  handleOnPress: (muscleGroup: MuscleGroup) => void;
};

const MuscleGroupButton = (props: MuscleGroupButtonProps) => {
  const { muscleGroup, handleOnPress } = props;
  const COLORS = useColors();
  const muscleButtonSize = Layout.window.width / 2.3;
  const view = muscleGroup === "back" ? "back" : "front";
  const displayName = muscleGroupMap.get(muscleGroup)?.displayName ?? "default";

  return (
    <View style={{ marginBottom: 30, alignItems: "center" }}>
      <TouchableOpacity
        style={{
          width: muscleButtonSize,
          height: muscleButtonSize,
        }}
        onPress={() => handleOnPress(muscleGroup)}
      >
        <View
          style={{
            backgroundColor: COLORS.foreground,
            borderRadius: 20,
          }}
        >
          <MuscleAnatomy
            primaryMuscles={[muscleGroup as MuscleOptions]}
            view={view}
            zoom="dynamic"
          />
        </View>
      </TouchableOpacity>
      <Text text60BO marginT-10 color={COLORS.text}>
        {displayName}
      </Text>
    </View>
  );
};

export default function LibraryScreen() {
  const [expandFilters, setExpandFilters] = useState(false);

  const COLORS = useColors();

  const filterStyles: ViewStyle = {
    flexDirection: "row",
    alignItems: "center",
    width: "95%",
  };

  const handleOnPressMG = (muscleGroup: MuscleGroup) => {
    console.log(muscleGroup);
  };

  return (
    <Background useSafeArea flex style={{ alignItems: "center" }}>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {muscleGroups.map((muscleGroup, index) => {
            return (
              <MuscleGroupButton
                key={index}
                muscleGroup={muscleGroup}
                handleOnPress={handleOnPressMG}
              />
            );
          })}
        </View>
      </ScrollView>
    </Background>
  );
}
