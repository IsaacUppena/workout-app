import { Pressable, TextStyle, View, ViewStyle } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Text } from "react-native-ui-lib";

type ChipProps = {
  color: string;
  backgroundColor: string;
  title: string;
  size?: "small" | "medium" | "large";
  style?: ViewStyle;
  outlined?: boolean;
  leftIcon?: string;
  rightIcon?: string;
};

export default function Chip(props: ChipProps) {
  const {
    color,
    backgroundColor,
    title,
    size,
    style,
    outlined,
    leftIcon,
    rightIcon,
  } = props;

  const chipStyles: ViewStyle = {
    backgroundColor: outlined ? backgroundColor : color,
    borderColor: outlined ? color : backgroundColor,
    borderRadius: size === "large" ? 10 : size === "medium" ? 8 : 5,
    borderWidth: outlined ? 2 : 0,
    height: size === "large" ? 32 : size === "medium" ? 26 : 20,
    alignItems: "center",
    paddingHorizontal: 5,
    flexDirection: "row",
  };

  const textStyle: TextStyle = {
    fontSize: size === "large" ? 14 : size === "medium" ? 12 : 10,
    fontWeight: "bold",
  };

  return (
    <View style={{ ...chipStyles, ...style }}>
      {leftIcon ? (
        <FontAwesome5
          name={leftIcon}
          color={outlined ? color : backgroundColor}
        />
      ) : (
        ""
      )}
      <Text
        style={textStyle}
        marginH-5
        color={outlined ? color : backgroundColor}
      >
        {title}
      </Text>
      {rightIcon ? (
        <FontAwesome5
          name={rightIcon}
          color={outlined ? color : backgroundColor}
        />
      ) : (
        ""
      )}
    </View>
  );
}
