import { Exercise } from "../models/Exercise";

const exampleExercises: Exercise[] = [
  {
    id: "military-press-weight-reps",
    name: "Military Press",
    primaryMuscle: "shoulders",
    secondaryMuscles: ["triceps", "core"],
    measurements: ["weight", "reps"],
    resistanceType: "barbell",
  },
  {
    id: "barbell-squat-weight-reps",
    name: "Barbell Squat",
    primaryMuscle: "quads",
    secondaryMuscles: ["hamstrings", "glutes"],
    measurements: ["weight", "reps"],
    resistanceType: "barbell",
  },
  {
    id: "dumbbell-clean-and-jerk-weight-reps",
    name: "Dumbbell Clean and Jerk",
    primaryMuscle: "traps",
    secondaryMuscles: ["arms", "shoulders"],
    measurements: ["weight", "reps"],
    resistanceType: "dumbbell",
  },
  {
    id: "seated-cable-row-weight-reps",
    name: "Seated Cable Row",
    primaryMuscle: "lats",
    secondaryMuscles: ["rearDelts", "scapular"],
    measurements: ["weight", "reps"],
    resistanceType: "machine",
  },
  {
    id: "bench-press-weight-reps",
    name: "Bench Press",
    primaryMuscle: "pecs",
    secondaryMuscles: ["triceps", "frontDelts"],
    measurements: ["weight", "reps"],
    resistanceType: "barbell",
  },
  {
    id: "dumbbell-suitcase-carry-weight-distance",
    name: "Dumbbell Suitcase Carry",
    primaryMuscle: "forearms",
    secondaryMuscles: ["core", "traps"],
    measurements: ["weight", "distance"],
    resistanceType: "dumbbell",
  },
  {
    id: "running-time-calories",
    name: "Running",
    primaryMuscle: "cardio",
    secondaryMuscles: ["legs", "core"],
    measurements: ["time", "calories"],
    resistanceType: "bodyWeight",
  },
];

export default exampleExercises;
