import { View, ViewStyle } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Text } from "react-native-ui-lib";

type ChipProps = {
  color: string;
  backgroundColor: string;
  title: string;
  outlined?: boolean;
  leftIcon?: string;
  rightIcon?: string;
};

export default function Chip(props: ChipProps) {
  const { color, backgroundColor, title, outlined, leftIcon, rightIcon } =
    props;

  const chipStyles: ViewStyle = {
    backgroundColor: outlined ? backgroundColor : color,
    borderColor: outlined ? color : backgroundColor,
    borderRadius: 10,
    borderWidth: outlined ? 2 : 0,
    height: 26,
    alignItems: "center",
    paddingHorizontal: 5,
    flexDirection: "row",
  };

  return (
    <View style={chipStyles}>
      {leftIcon ? (
        <FontAwesome5
          name={leftIcon}
          color={outlined ? color : backgroundColor}
        />
      ) : (
        ""
      )}
      <Text text90BO marginH-5 color={outlined ? color : backgroundColor}>
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
