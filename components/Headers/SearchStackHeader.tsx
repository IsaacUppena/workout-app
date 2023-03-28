import { TouchableOpacity } from "react-native-gesture-handler";
import { TextInput } from "react-native";
import { Text } from "react-native-ui-lib";
import { View } from "react-native";
import useColors from "../../hooks/useColors";

import { ViewStyle } from "react-native";
import { useEffect, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import IconButton from "../IconButton";
import { LoggedWorkout } from "../../models/Log";
import { StackHeaderProps } from "@react-navigation/stack";

type TextStackHeaderProps = StackHeaderProps & {
  placeholderText: string;
  onChangeSearchInput: (newInput: string) => void;
  iconRight?: string;
  onPressIconRight?: () => void;
};

export default function SearchStackHeader(props: TextStackHeaderProps) {
  const COLORS = useColors();
  const [isFocused, setIsFocused] = useState(false);
  const {
    navigation,
    placeholderText,
    iconRight,
    onChangeSearchInput,
    onPressIconRight,
  } = props;

  // const { titleComponent } = route.params as StackHeaderParams;

  // const dateObj = new Date(selectedWorkout.date);
  // const dateString = dateObj.toLocaleDateString();

  // console.log(title);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const searchContainerStyles: ViewStyle = {
    backgroundColor: COLORS.foreground,
    width: "80%",
    alignItems: "center",
    flexDirection: "row",
    borderColor: isFocused ? COLORS.textTertiary : COLORS.foreground,
    borderRadius: 10,
    borderWidth: 2,
  };

  const headerContainerStyles: ViewStyle = {
    borderBottomColor: COLORS.background,
    borderBottomWidth: 2,
    backgroundColor: COLORS.container,
    height: 100,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: "10%",
    paddingHorizontal: "5%",
  };

  return (
    <View style={headerContainerStyles}>
      <IconButton
        name="angle-left"
        size={80}
        color={COLORS.text}
        onPress={handleGoBack}
      />
      <View style={searchContainerStyles}>
        <FontAwesome5
          name="search"
          size={16}
          color={COLORS.textTertiary}
          style={{ marginLeft: 10 }}
        />
        <TextInput
          style={{
            width: "100%",
            margin: 10,
            fontWeight: "600",
            fontSize: 16,
            color: COLORS.text,
          }}
          onChangeText={onChangeSearchInput}
          placeholder={placeholderText}
          placeholderTextColor={COLORS.textTertiary}
          selectTextOnFocus
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          autoCapitalize="none"
          // enterKeyHint="search"
          // inputMode="search"
        />
      </View>
      {iconRight && onPressIconRight ? (
        <IconButton
          name={iconRight}
          size={50}
          color={COLORS.text}
          onPress={() => onPressIconRight()}
        />
      ) : (
        <View />
      )}
    </View>
  );
}
