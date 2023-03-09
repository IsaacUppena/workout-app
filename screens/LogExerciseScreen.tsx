import {
  Button,
  FloatingButton,
  Gradient,
  Icon,
  Incubator,
  Text,
} from "react-native-ui-lib";
import { SegmentedControl, Background } from "../components/Themed";

import { DialogHeaderProps } from "react-native-ui-lib/src/incubator";

import { FontAwesome5 } from "@expo/vector-icons";
import useColors from "../hooks/useColors";
import {
  GestureResponderEvent,
  Pressable,
  TouchableHighlight,
  View,
  ViewStyle,
} from "react-native";
import {
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import IconButton from "../components/IconButton";
import { LoggedExercise } from "../models/Log";
import ExerciseCard from "../components/ExerciseCard";
import Layout from "../constants/Layout";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

export default function LogExerciseScreen(props: any) {
  const [searchInput, setSearchInput] = useState("");

  const day = props.route.params;
  const COLORS = useColors();
  const [showDialog, setShowDialog] = useState(false);

  const containerStyles: ViewStyle = {
    flex: 1,
    width: "100%",
    alignItems: "center",
    // justifyContent: "space-between",
    flexDirection: "column",
  };

  const onChangeText = (newText: string) => {
    setSearchInput(newText);
  };

  const handleAddExercise = () => {
    console.log("created exercise");
    props.navigation.navigate("AddExerciseModal");
    // setShowDialog(true);
  };

  const handleDayPress = (day: Object) => {
    console.log("selected day", day);
    props.navigation.navigate("LogExercise", day);
  };

  // const onDialogDismissed = useCallback(() => {
  //   setShowDialog(false);
  // }, []);

  const onDialogDismissed = () => {
    setShowDialog(false);
  };

  const exampleExercises: LoggedExercise[] = [
    {
      exercise: {
        name: "Bench Press",
        primaryMuscle: "pecs",
        secondaryMuscles: ["triceps", "frontDelts"],
        measurements: ["weight", "reps"],
      },
      sets: [
        { reps: 10, weight: 160 },
        { reps: 10, weight: 170 },
        { reps: 8, weight: 180 },
      ],
    },
    {
      exercise: {
        name: "Barbell Squat",
        primaryMuscle: "quads",
        secondaryMuscles: ["hamstrings", "glutes"],
        measurements: ["weight", "reps"],
      },
      sets: [
        { reps: 10, weight: 160, rpe: 7.5 },
        { reps: 10, weight: 170, rpe: 8.5 },
        { reps: 8, weight: 180, rpe: 9.5 },
      ],
    },
    {
      exercise: {
        name: "Dumbbell Clean and Jerk",
        primaryMuscle: "traps",
        secondaryMuscles: ["arms", "quads"],
        measurements: ["weight", "reps"],
      },
      sets: [
        { reps: 10, weight: 160 },
        { reps: 10, weight: 170 },
        { reps: 8, weight: 180 },
      ],
    },
  ];

  // Replace FAB with a bottom gradient and button that says (Add exercise +), this transforms into a modal where exercise can be selected

  return (
    <Background useSafeArea flex>
      <View style={containerStyles}>
        <FlatList
          data={exampleExercises}
          renderItem={({ item, index }) => (
            <View>
              <ExerciseCard log={item} onPress={() => {}} />
            </View>
          )}
          keyExtractor={(item, index) => `${index}`}
        ></FlatList>
      </View>
      {/* <View
        style={{
          position: "absolute",
          bottom: 30,
          right: Layout.window.width / 2 - 40,
          backgroundColor: "#fff",
        }}
      > */}
      {/* <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: 100,
          backgroundColor: "#FFF",
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: 20,
        }}
      > */}
      {/* <LinearGradient
        colors={["transparent", "000"]}
        locations={[0, 0.6]}
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: 100,
          // backgroundColor: "#FFF",
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: 20,
        }}
      > */}
      <Pressable onPress={handleAddExercise}>
        {/* <LinearGradient colors={["transparent", "rgba(1,1,0,0.8)"]}> */}
        <View
          style={{
            flexDirection: "row",
            padding: 10,
            backgroundColor: COLORS.active,
            width: 150,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
          }}
        >
          <Text text70BO marginR-5 color={COLORS.text}>
            Add Exercise
          </Text>
          <FontAwesome5 name="plus" color={COLORS.text} />
          {/* </LinearGradient> */}
        </View>
      </Pressable>
      {/* </LinearGradient> */}
      <Incubator.Dialog
        width={"90%"}
        visible={showDialog}
        onDismiss={onDialogDismissed}
        headerProps={{
          title: "Add Exercise",
          showKnob: false,
          showDivider: false,
        }}
        containerStyle={{ backgroundColor: COLORS.background, height: "90%" }}
        center
        // direction="up"
      >
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
              style={{ marginRight: 8 }}
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
          <TouchableHighlight>
            <FontAwesome5 name="filter" color={COLORS.textTertiary} size={20} />
          </TouchableHighlight>
        </View>
        {/* <WheelPicker initialValue={5} label={"Days"} items={dayItems} /> */}
      </Incubator.Dialog>

      {/* </View> */}
      {/* <IconButton
          name="plus"
          color={COLORS.text}
          backgroundColor={COLORS.active}
          size={80}
          onPress={handleCreateExercise}
        />
      </View> */}
    </Background>
  );
}
