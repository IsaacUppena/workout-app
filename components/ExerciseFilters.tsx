import { ExpandableSection, Text, View } from "react-native-ui-lib";
import useColors from "../hooks/useColors";
import Chip from "./Chip";
import {
  muscleGroups,
  muscles,
  MuscleGroup,
  Muscle,
  Equipment,
  equipment,
} from "../models/Exercise";
import { useEffect, useState } from "react";
import { GestureResponderEvent, Pressable } from "react-native";
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
    handleOnPress,
    handleOnPressAll,
  } = props;
  const [expanded, setExpanded] = useState(openByDefault);

  return (
    <ExpandableSection
      expanded={expanded}
      sectionHeader={
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Text text70BO marginB-5 marginR-5 color={titleColor}>
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
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
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
  );
}

export default function ExerciseFilters() {
  const COLORS = useColors();
  const [selectedMuscleGroups, setSelectedMuscleGroups] = useState(
    [] as MuscleGroup[]
  );
  const [selectedMuscles, setSelectedMuscles] = useState([] as Muscle[]);
  const [availableMuscles, setAvailableMuscles] = useState(muscles.slice());
  const [selectedTypes, setSelectedTypes] = useState([] as Equipment[]);
  const [allMuscleGroups, setAllMuscleGroups] = useState(true);
  const [allMuscles, setAllMuscles] = useState(true);
  const [allTypes, setAllTypes] = useState(true);

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
  equipment.forEach((type) => {
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
    handleOnPressAllMuscles();
    let curGroups = selectedMuscleGroups as string[];
    curGroups = validateState(curGroups, muscleGroup);

    let availableMuscles: Muscle[] = [];
    for (let group of curGroups) {
      const mapping = muscleGroupMuscleMap.get(group);
      if (mapping) {
        availableMuscles = availableMuscles.concat(mapping as Muscle[]);
      }
    }

    if (curGroups.length === 0) {
      handleOnPressAllMuscleGroups();
    } else {
      setSelectedMuscleGroups(curGroups as MuscleGroup[]);
      setAvailableMuscles(availableMuscles);
    }
  };

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
      setSelectedTypes(curTypes as Equipment[]);
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

  return (
    <View style={{ alignItems: "center", marginTop: 15 }}>
      <View
        style={{
          backgroundColor: COLORS.container,
          width: "95%",
          borderRadius: 10,
          padding: 20,
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
          handleOnPress={handleOnPressMuscle}
          handleOnPressAll={handleOnPressAllMuscles}
        />
        <ChipListInput
          title="Exercise Types"
          titleColor={COLORS.text}
          activeColor={COLORS.active}
          inactiveColor={COLORS.background}
          textColor={COLORS.text}
          filters={selectedTypes}
          options={equipment.slice()}
          displayNameMap={typeNameMap}
          selectAll={allTypes}
          handleOnPress={handleOnPressType}
          handleOnPressAll={handleOnPressAllTypes}
        />
      </View>
    </View>
  );
}
