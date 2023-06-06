import { ExpandableSection, Text, View } from "react-native-ui-lib";
import useColors from "../hooks/useColors";
import Chip from "./Chip";
import {
  muscleGroups,
  muscles,
  MuscleGroup,
  Muscle,
  ResistanceType,
  resistanceTypes,
} from "../models/Exercise";
import { useEffect, useState } from "react";
import { GestureResponderEvent, Pressable, ViewStyle } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import {
  exerciseTypeMap,
  muscleGroupMap,
  muscleMap,
} from "../constants/MuscleMap";
import { FontAwesome5 } from "@expo/vector-icons";

type ChipListInputProps = {
  title: string;
  titleColor: string;
  activeColor: string;
  inactiveColor: string;
  textColor: string;
  filters: string[];
  options: string[];
  displayNameMap: Map<string, string>;
  selectAll: boolean;
  openByDefault?: boolean;
  containerStyles?: ViewStyle;
  handleOnPress: (pressedValue: string) => void;
  handleOnPressAll: () => void;
};

function ChipListInput(props: ChipListInputProps) {
  const {
    title,
    titleColor,
    activeColor,
    inactiveColor,
    textColor,
    filters,
    options,
    displayNameMap,
    selectAll,
    openByDefault,
    containerStyles,
    handleOnPress,
    handleOnPressAll,
  } = props;
  const [expanded, setExpanded] = useState(openByDefault);

  return (
    <View style={containerStyles}>
      <ExpandableSection
        expanded={expanded}
        sectionHeader={
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text text70BO color={titleColor}>
              {title}
            </Text>
            <FontAwesome5
              name={expanded ? "angle-up" : "angle-down"}
              color={titleColor}
              size={20}
            />
          </View>
        }
        onPress={() => setExpanded(expanded ? false : true)}
      >
        <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 5 }}>
          <TouchableWithoutFeedback onPress={handleOnPressAll}>
            <Chip
              color={selectAll ? activeColor : inactiveColor}
              backgroundColor={textColor}
              title="All"
              size="medium"
              style={{ marginRight: 5, marginBottom: 5 }}
            />
          </TouchableWithoutFeedback>
          {options.map((muscleGroup: string, index) => {
            const displayName = displayNameMap.get(muscleGroup) ?? muscleGroup;
            return (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => handleOnPress(muscleGroup)}
              >
                <Chip
                  color={
                    filters.includes(muscleGroup) ? activeColor : inactiveColor
                  }
                  backgroundColor={textColor}
                  title={displayName}
                  size="medium"
                  style={{ marginRight: 5, marginBottom: 5 }}
                />
              </TouchableWithoutFeedback>
            );
          })}
        </View>
      </ExpandableSection>
    </View>
  );
}

export default function ExerciseFilters() {
  const COLORS = useColors();
  const [selectedMuscleGroups, setSelectedMuscleGroups] = useState(
    [] as MuscleGroup[]
  );
  const [selectedMuscles, setSelectedMuscles] = useState([] as Muscle[]);
  const [availableMuscles, setAvailableMuscles] = useState(muscles.slice());
  const [selectedTypes, setSelectedTypes] = useState([] as ResistanceType[]);
  const [allMuscleGroups, setAllMuscleGroups] = useState(true);
  const [allMuscles, setAllMuscles] = useState(true);
  const [allTypes, setAllTypes] = useState(true);

  // Initialize all name mappings
  const muscleGroupNameMap: Map<string, string> = new Map();
  const muscleGroupMuscleMap: Map<string, string[]> = new Map();
  const muscleNameMap: Map<string, string> = new Map();
  const typeNameMap: Map<string, string> = new Map();
  muscleGroups.forEach((muscleGroup) => {
    const mapping = muscleGroupMap.get(muscleGroup);
    if (mapping) {
      muscleGroupNameMap.set(muscleGroup, mapping.displayName);
      muscleGroupMuscleMap.set(muscleGroup, mapping.muscles);
    }
  });
  muscles.forEach((muscle) => {
    const mapping = muscleMap.get(muscle);
    if (mapping) muscleNameMap.set(muscle, mapping.displayName);
  });
  resistanceTypes.forEach((type) => {
    const mapping = exerciseTypeMap.get(type);
    if (mapping) typeNameMap.set(type, mapping.displayName);
  });

  const validateState = (curState: string[], newState: string) => {
    if (curState.includes(newState)) {
      curState = curState.filter((cur) => !(cur === newState));
    } else {
      if (curState.length > 2) {
        curState = curState.slice(1);
      }
      curState = curState.concat(newState);
    }
    return curState;
  };

  const handleOnPressMuscleGroup = (muscleGroup: string) => {
    setAllMuscleGroups(false);
    const curGroups = selectedMuscleGroups as string[];
    const newGroups = validateState(curGroups, muscleGroup);

    // Get muscles available to new set of muscle groups
    let availableMuscles: Muscle[] = [];
    for (let group of newGroups) {
      const mapping = muscleGroupMuscleMap.get(group);
      if (mapping) {
        availableMuscles = availableMuscles.concat(mapping as Muscle[]);
      }
    }

    if (newGroups.length === 0) {
      handleOnPressAllMuscleGroups();
    } else {
      if (newGroups.length < curGroups.length) {
        handleOnPressAllMuscles();
      }
      setSelectedMuscleGroups(newGroups as MuscleGroup[]);
      setAvailableMuscles(availableMuscles);
    }
  };

  // TODO: Fix behavior when muscle gets set to all, can be confusing
  const handleOnPressMuscle = (muscle: string) => {
    setAllMuscles(false);
    let curMuscles = selectedMuscles as string[];
    curMuscles = validateState(curMuscles, muscle);
    if (curMuscles.length === 0) {
      handleOnPressAllMuscles();
    } else {
      setSelectedMuscles(curMuscles as Muscle[]);
    }
  };

  const handleOnPressType = (type: string) => {
    setAllTypes(false);
    let curTypes = selectedTypes as string[];
    curTypes = validateState(curTypes, type);
    if (curTypes.length === 0) {
      handleOnPressAllTypes();
    } else {
      setSelectedTypes(curTypes as ResistanceType[]);
    }
  };

  const handleOnPressAllMuscleGroups = () => {
    setSelectedMuscleGroups([]);
    setAllMuscleGroups(true);
    setAvailableMuscles(muscles.slice());
    handleOnPressAllMuscles();
  };

  const handleOnPressAllMuscles = () => {
    setSelectedMuscles([]);
    setAllMuscles(true);
  };

  const handleOnPressAllTypes = () => {
    setSelectedTypes([]);
    setAllTypes(true);
  };

  const filterStyles: ViewStyle = {
    backgroundColor: COLORS.foreground,
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  };

  return (
    <View
      style={{
        //   backgroundColor: COLORS.container,
        //   width: "95%",
        //   borderRadius: 10,
        padding: 10,
      }}
    >
      <Text text60BO color={COLORS.text}>
        Filters
      </Text>
      <ChipListInput
        title="Muscle Groups"
        titleColor={COLORS.text}
        activeColor={COLORS.active}
        inactiveColor={COLORS.background}
        textColor={COLORS.text}
        filters={selectedMuscleGroups}
        options={muscleGroups.slice()}
        displayNameMap={muscleGroupNameMap}
        selectAll={allMuscleGroups}
        openByDefault
        containerStyles={filterStyles}
        handleOnPress={handleOnPressMuscleGroup}
        handleOnPressAll={handleOnPressAllMuscleGroups}
      />
      <ChipListInput
        title="Muscles"
        titleColor={COLORS.text}
        activeColor={COLORS.active}
        inactiveColor={COLORS.background}
        textColor={COLORS.text}
        filters={selectedMuscles}
        options={availableMuscles}
        displayNameMap={muscleNameMap}
        selectAll={allMuscles}
        containerStyles={filterStyles}
        handleOnPress={handleOnPressMuscle}
        handleOnPressAll={handleOnPressAllMuscles}
      />
      <ChipListInput
        title="Resistance Types"
        titleColor={COLORS.text}
        activeColor={COLORS.active}
        inactiveColor={COLORS.background}
        textColor={COLORS.text}
        filters={selectedTypes}
        options={resistanceTypes.slice()}
        displayNameMap={typeNameMap}
        selectAll={allTypes}
        containerStyles={filterStyles}
        handleOnPress={handleOnPressType}
        handleOnPressAll={handleOnPressAllTypes}
      />
    </View>
  );
}
