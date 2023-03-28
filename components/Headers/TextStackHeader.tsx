import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "react-native-ui-lib";
import { View } from "react-native";
import useColors from "../../hooks/useColors";

import { ViewStyle } from "react-native";
import { useEffect } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import IconButton from "../IconButton";
import { LoggedWorkout } from "../../models/Log";
import { StackHeaderProps } from "@react-navigation/stack";

type TextStackHeaderProps = StackHeaderProps & {
  // iconRight?: string;
  // onPressIconRight?: () => void;
  title: string;
  iconRight?: string;
  onPressIconRight?: () => void;
};

export default function TextStackHeader(props: TextStackHeaderProps) {
  const COLORS = useColors();
  const { navigation, title, iconRight, onPressIconRight } = props;

  // const { titleComponent } = route.params as StackHeaderParams;

  // const dateObj = new Date(selectedWorkout.date);
  // const dateString = dateObj.toLocaleDateString();

  // console.log(title);

  const handleGoBack = () => {
    navigation.goBack();
  };

  console.log(iconRight);

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
        paddingTop: "10%",
        paddingHorizontal: "5%",
      }}
    >
      <IconButton
        name="angle-left"
        size={80}
        color={COLORS.text}
        onPress={handleGoBack}
      />
      <Text text60BO color={COLORS.text}>
        {title}
      </Text>
      {iconRight && onPressIconRight ? (
        <IconButton
          name={iconRight}
          size={80}
          color={COLORS.text}
          onPress={() => onPressIconRight()}
        />
      ) : (
        <View />
      )}
    </View>
  );
}
