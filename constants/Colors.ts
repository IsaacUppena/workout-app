const primary = {
  light: "#B13530",
  default: "#FF5555",
  dark: "#FF3131",
};

const neutral = {
  lightest: "#fff",
  lighter: "#C8C8DC",
  light: "#9696AA",
  medium: "#646478",
  dark: "#282832",
  darker: "#191423",
  darkest: "#0F0A19",
};

const data = {
  violet: "#9400D3",
  indigo: "#4B0082",
  blue: "#0000FF",
  green: "#00AA00",
  yellow: "#FFFF00",
  orange: "#FF7F00",
  red: "#FF0000",
  pink: "#FF9999",
};

export default {
  light: {
    text: neutral.darkest,
    textSecondary: neutral.darker,
    textTertiary: neutral.dark,
    background: neutral.lightest,
    container: neutral.lighter,
    inactive: neutral.light,
    active: primary.default,
    disabled: neutral.medium,
  },
  dark: {
    text: neutral.lightest,
    textSecondary: neutral.lighter,
    textTertiary: neutral.light,
    background: neutral.darkest,
    container: neutral.darker,
    inactive: neutral.medium,
    active: primary.default,
    disabled: neutral.medium,
  },
};

export const muscleGroupColors = {
  arms: data.green,
  back: data.red,
  cardio: data.pink,
  chest: data.orange,
  core: data.yellow,
  legs: data.violet,
  shoulders: data.blue,
};

export const measurementColors = {
  reps: data.green,
  weight: data.red,
  calories: data.yellow,
  time: data.orange,
  rpe: data.blue,
};
