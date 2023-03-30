import { View, StyleSheet, SectionList, SafeAreaView } from "react-native";
import {
  Agenda,
  AgendaEntry,
  AgendaSchedule,
  CalendarProvider,
  DateData,
  ExpandableCalendar,
  WeekCalendar,
} from "react-native-calendars";
import { SegmentedControl, Background } from "../../components/Themed";
import useColors from "../../hooks/useColors";
import { useContext, useEffect, useState } from "react";
import { Text } from "react-native-ui-lib";
import { TouchableOpacity } from "react-native-gesture-handler";
import CalendarStrip from "react-native-calendar-strip";
import { FontAwesome5 } from "@expo/vector-icons";

import ScrollableCalendar from "../../components/ScrollableCalendar";
import { LoggedWorkout } from "../../models/Log";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps, useRoute } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList, RootTabParamList } from "../../navigation";
import {
  WorkoutContext,
  WorkoutContextType,
} from "../../context/WorkoutContext";

// import { T } from "@react-navigation/stack";
// import { HomeStackParamList } from "../../navigation/HomeNavigator";
// import { RootTabParamList } from "../../navigation/index";

type HomeScreenNavigationProps = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, "HomeTab">,
  StackScreenProps<RootStackParamList>
>;

export default function HomeScreen(props: HomeScreenNavigationProps) {
  const { workout, setNewWorkout } = useContext(
    WorkoutContext
  ) as WorkoutContextType;
  const [selectedWorkout, setSelectedWorkout] = useState(workout);
  const { navigation } = props;
  const COLORS = useColors();

  // const route = useRoute();
  // useEffect(() => {
  //   //This will run whenever params change

  //   // const { params } = route;
  //   // const { workout } = route.params ?? { workout: undefined };
  //   const { workout  } = route.params ?? { workout: undefined };

  //   console.log("TRIGGERD");
  //   if (workout) {
  //     console.log(`Workout ID: ${workout.id}`);
  //     setSelectedWorkout(workout);
  //   }
  // }, [route]);

  const handleOnPressEdit = () => {
    // console.log("selected day", day);

    navigation.navigate("HomeNavigator", {
      screen: "EditWorkout",
      params: {
        selectedWorkout,
      },
    });
  };

  const handleOnPressSummary = () => {
    navigation.navigate("HomeNavigator", {
      screen: "WorkoutSummary",
      params: {
        selectedWorkout,
      },
    });
  };

  const handleOnPressCalendar = () => {
    navigation.navigate("HomeNavigator", {
      screen: "CalendarList",
      params: {
        selectedWorkout,
      },
    });
  };

  // const handleOnChangeWorkout = (workout: LoggedWorkout) => {
  //   setSelectedWorkout(workout);
  // };

  return (
    <Background useSafeArea flex>
      {/* <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.container }}> */}
      {/* <Text text30BO center color={COLORS.background}>
        LOG
      </Text> */}
      <ScrollableCalendar
        // selectedWorkout={selectedWorkout}
        // handleOnChangeWorkout={handleOnChangeWorkout}
        handleOnPressEdit={handleOnPressEdit}
        handleOnPressSummary={handleOnPressSummary}
        handleOnPressCalendar={handleOnPressCalendar}
      />
      {/* </View> */}
      {/* </SafeAreaView> */}
    </Background>
  );
}
