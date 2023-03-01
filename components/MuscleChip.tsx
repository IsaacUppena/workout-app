import Chip from "./Chip";
import { MuscleOptions } from "../models/Exercise";
import { muscleMap, muscleGroupMap } from "../constants/MuscleMap";
import useColors from "../hooks/useColors";
import { View, ViewStyle } from "react-native";

type MuscleChipProps = {
  muscleName: MuscleOptions;
  containerStyle?: ViewStyle;
  isPrimary?: boolean;
};

export default function MuscleChip(props: MuscleChipProps) {
  const { isPrimary, muscleName, containerStyle } = props;
  const COLORS = useColors();
  let color = "#fff";
  let displayName = "Default";

  const isMuscle = muscleMap.has(muscleName);

  // Get muscle color via mapping
  if (isMuscle) {
    const muscle = muscleMap.get(muscleName);
    if (muscle) displayName = muscle.displayName;
    const muscleGroup = muscle
      ? muscleGroupMap.get(muscle.muscleGroup as MuscleOptions)
      : undefined;
    if (muscleGroup) color = muscleGroup.color;
  } else {
    const muscleGroup = muscleGroupMap.get(muscleName);
    if (muscleGroup) {
      color = muscleGroup.color;
      displayName = muscleGroup.displayName;
    }
  }

  return (
    <View style={containerStyle}>
      <Chip
        title={displayName}
        color={color}
        backgroundColor={COLORS.container}
        outlined={!isPrimary}
      />
    </View>
  );
}
