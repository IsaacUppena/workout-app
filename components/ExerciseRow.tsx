import { View, ViewStyle } from "react-native";
import { Text } from "react-native-ui-lib";
import useColors from "../hooks/useColors";

export default function ExerciseRow() {
  const COLORS = useColors();
  const containerStyles: ViewStyle = {
    margin: 10,
    backgroundColor: COLORS.container,
    borderRadius: 10,
    flexDirection: "row",
    width: "95%",
  };

  const iconStyles: ViewStyle = {
    width: 80,
    height: 80,
    backgroundColor: COLORS.foreground,
    // borderRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  };

  const contentStyles: ViewStyle = {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10,
  };

  return (
    <View style={containerStyles}>
      <View style={iconStyles} />
      <View style={contentStyles}>
        <Text text60BO color={COLORS.text}>
          Bench Press
        </Text>
      </View>
    </View>
  );
}
