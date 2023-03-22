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

function SearchInput() {
  const [searchInput, setSearchInput] = useState("");
  const COLORS = useColors();

  const onChangeText = (newText: string) => {
    setSearchInput(newText);
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLORS.container,
        borderRadius: 10,
        padding: 10,
        width: "95%",
      }}
    >
      <FontAwesome5 name="search" color={COLORS.textTertiary} size={16} />
      <TextInput
        onChangeText={onChangeText}
        value={searchInput}
        placeholder="Search exercises"
        style={{
          color: COLORS.textSecondary,
          fontSize: 16,
          marginLeft: 10,
        }}
      />
    </View>
  );
}

export default function LibraryScreen() {
  const [expandFilters, setExpandFilters] = useState(false);

  const COLORS = useColors();

  const filterStyles: ViewStyle = {
    flexDirection: "row",
    alignItems: "center",
    width: "95%",
  };

  return (
    <Background useSafeArea flex style={{ alignItems: "center" }}>
      <SegmentedControl
        segments={[{ label: "Exercises" }, { label: "Workouts" }]}
      />

      <SearchInput />

      <View style={filterStyles}>
        <ExpandableSection
          expanded={expandFilters}
          sectionHeader={
            <View
              style={{
                flexDirection: "row",
                // justifyContent: "space-between",
                // width: "20%",
                alignItems: "center",
                paddingHorizontal: 10,
                marginTop: 10,
              }}
            >
              <Text text70BO color={COLORS.textTertiary}>
                Filters
              </Text>
              <FontAwesome5
                name="filter"
                color={COLORS.textTertiary}
                size={14}
              />
            </View>
          }
          onPress={() => setExpandFilters(expandFilters ? false : true)}
        >
          <ExerciseFilters />
        </ExpandableSection>
      </View>

      <ExerciseRow />
    </Background>
  );
}
