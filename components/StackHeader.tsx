import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "react-native-ui-lib";
import { View } from "react-native";
import useColors from "../hooks/useColors";

import { ViewStyle } from "react-native";
import { useEffect } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import IconButton from "./IconButton";

export default function StackHeader(props: any) {
  const COLORS = useColors();
  const { navigation, route } = props;
  const date = route.params;
  const dateObj = new Date(date.timestamp);
  const dateString = dateObj.toLocaleDateString();

  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: "none",
      },
    });
    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          backgroundColor: COLORS.container,
        },
      });
  }, [navigation]);

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
        paddingTop: "10%",
        paddingHorizontal: "10%",
      }}
    >
      <IconButton
        name="angle-left"
        size={80}
        color={COLORS.text}
        onPress={handleGoBack}
      />
      <Text text60BO color={COLORS.text}>
        {dateString}
      </Text>
      <View></View>
    </View>
  );
}
