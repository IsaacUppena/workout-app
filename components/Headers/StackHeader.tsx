import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "react-native-ui-lib";
import { View } from "react-native";
import useColors from "../../hooks/useColors";

import { ViewStyle } from "react-native";
import { useEffect } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import IconButton from "../IconButton";
import { LoggedWorkout } from "../../models/Log";

type StackHeaderParams = {
  // iconRight?: string;
  // onPressIconRight?: () => void;
  titleComponent?: React.ReactNode;
};

export default function StackHeader(props: StackHeaderParams) {
  const COLORS = useColors();
  // const { navigation, route } = props;
  // const { titleComponent } = route.params as StackHeaderParams;
  const { titleComponent } = props;

  // const dateObj = new Date(selectedWorkout.date);
  // const dateString = dateObj.toLocaleDateString();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View
      style={{
        borderBottomColor: COLORS.background,
        borderBottomWidth: 2,
        backgroundColor: COLORS.container,
        height: 100,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingTop: "5%",
        paddingHorizontal: "5%",
      }}
    >
      <IconButton
        name="angle-left"
        size={80}
        color={COLORS.text}
        onPress={handleGoBack}
      />
      {titleComponent}
      {/* {iconRight && onPressIconRight ? (
        <IconButton
          name={iconRight}
          size={80}
          color={COLORS.text}
          onPress={() => onPressIconRight()}
        />
      ) : (
        ""
      )} */}
      {/* <Text text60BO color={COLORS.text}>
        {dateString}
      </Text> */}
    </View>
  );
}
