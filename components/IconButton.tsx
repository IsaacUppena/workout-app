import { FontAwesome5 } from "@expo/vector-icons";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

type IconButtonProps = {
  name: string;
  size: number;
  color?: string;
  backgroundColor?: string;
  onPress: Function;
};

export default function IconButton(props: IconButtonProps) {
  const { onPress, size, backgroundColor, ...otherProps } = props;

  return backgroundColor ? (
    <TouchableOpacity onPress={() => onPress}>
      <View
        style={{
          width: size,
          height: size,
          backgroundColor: backgroundColor,
          borderRadius: size / 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FontAwesome5 size={size / 3} {...otherProps} />
      </View>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={() => onPress()}>
      <FontAwesome5 size={size / 3} {...otherProps} />
    </TouchableOpacity>
  );
}
