import { SegmentedControl, Background } from "../components/Themed";

import MuscleAnatomy from "../components/MuscleAnatomy";
import { useCallback, useRef, useState } from "react";
import {
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { SectionList, StyleSheet, View } from "react-native";
import { ExpandableSection, Text, TextField } from "react-native-ui-lib";
import useColors from "../hooks/useColors";
import { FontAwesome5 } from "@expo/vector-icons";
import Chip from "../components/Chip";
import ExerciseFilters from "../components/ExerciseFilters";

export default function LibraryScreen() {
  const [searchInput, setSearchInput] = useState("");
  const [expandFilters, setExpandFilters] = useState(false);

  const COLORS = useColors();
  const DATA = [
    {
      title: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"],
    },
    {
      title: "Sides",
      data: ["French Fries", "Onion Rings", "Fried Shrimps"],
    },
    {
      title: "Drinks",
      data: ["Water", "Coke", "Beer"],
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"],
    },
  ];

  const onChangeText = (newText: string) => {
    setSearchInput(newText);
  };

  return (
    <Background useSafeArea flex>
      <SegmentedControl
        segments={[{ label: "Exercises" }, { label: "Workouts" }]}
      />

      <ExpandableSection
        expanded={expandFilters}
        sectionHeader={
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 10,
              marginTop: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                backgroundColor: COLORS.container,
                borderRadius: 10,
                padding: 10,
              }}
            >
              <FontAwesome5
                name="search"
                color={COLORS.textTertiary}
                // style={{ marginRight: 8 }}
                size={16}
              />
              <TextInput
                onChangeText={onChangeText}
                value={searchInput}
                placeholder="Search exercises"
                style={{
                  width: "80%",
                  color: COLORS.textSecondary,
                  fontSize: 16,
                }}
              />
            </View>
            <TouchableOpacity>
              <FontAwesome5
                name="filter"
                color={COLORS.textTertiary}
                size={20}
              />
            </TouchableOpacity>
          </View>
        }
        onPress={() => setExpandFilters(expandFilters ? false : true)}
      >
        <ExerciseFilters />
      </ExpandableSection>
      {/* <MuscleAnatomy
        primaryMuscles={["pecs", "biceps"]}
        secondaryMuscles={["abs", "shoulders"]}
        view="both"
      /> */}

      {/* <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      /> */}
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
  },
});
