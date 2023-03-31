import { LoggedExercise, LoggedWorkout } from "../models/Log";

const exampleExercises: LoggedExercise[] = [
  {
    exercise: {
      id: "military-press-weight-reps",
      name: "Military Press",
      primaryMuscle: "shoulders",
      secondaryMuscles: ["triceps", "core"],
      measurements: ["weight", "reps"],
      resistanceType: "barbell",
    },
    sets: [
      { reps: 10, weight: 160 },
      { reps: 10, weight: 170 },
      { reps: 8, weight: 180 },
    ],
  },
  {
    exercise: {
      id: "barbell-squat-weight-reps",
      name: "Barbell Squat",
      primaryMuscle: "quads",
      secondaryMuscles: ["hamstrings", "glutes"],
      measurements: ["weight", "reps"],
      resistanceType: "barbell",
    },
    sets: [
      { reps: 10, weight: 160, rpe: 7.5 },
      { reps: 10, weight: 170, rpe: 8.5 },
      { reps: 8, weight: 180, rpe: 9.5 },
    ],
  },
  {
    exercise: {
      id: "dumbbell-clean-and-jerk-weight-reps",
      name: "Dumbbell Clean and Jerk",
      primaryMuscle: "traps",
      secondaryMuscles: ["arms", "shoulders"],
      measurements: ["weight", "reps"],
      resistanceType: "dumbbell",
    },
    sets: [
      { reps: 10, weight: 160 },
      { reps: 10, weight: 170 },
      { reps: 8, weight: 180 },
      { reps: 6, weight: 190 },
    ],
  },
  {
    exercise: {
      id: "seated-cable-row-weight-reps",
      name: "Seated Cable Row",
      primaryMuscle: "lats",
      secondaryMuscles: ["rearDelts", "scapular"],
      measurements: ["weight", "reps"],
      resistanceType: "machine",
    },
    sets: [
      { reps: 10, weight: 160 },
      { reps: 10, weight: 170 },
      { reps: 8, weight: 180 },
      { reps: 6, weight: 190 },
    ],
  },
];

const exampleExercises2: LoggedExercise[] = [
  {
    exercise: {
      id: "bench-press-weight-reps",
      name: "Bench Press",
      primaryMuscle: "pecs",
      secondaryMuscles: ["triceps", "frontDelts"],
      measurements: ["weight", "reps"],
      resistanceType: "barbell",
    },
    sets: [
      { reps: 10, weight: 160 },
      { reps: 10, weight: 170 },
      { reps: 8, weight: 180 },
    ],
  },
  {
    exercise: {
      id: "dumbbell-suitcase-carry-weight-distance",
      name: "Dumbbell Suitcase Carry",
      primaryMuscle: "forearms",
      secondaryMuscles: ["core", "traps"],
      measurements: ["weight", "distance"],
      resistanceType: "dumbbell",
    },
    sets: [
      { weight: 160, distance: 10, rpe: 7.5 },
      { weight: 170, distance: 10, rpe: 8.5 },
      { weight: 180, distance: 8, rpe: 9.5 },
    ],
  },
  {
    exercise: {
      id: "running-time-calories",
      name: "Running",
      primaryMuscle: "cardio",
      secondaryMuscles: ["legs", "core"],
      measurements: ["time", "calories"],
      resistanceType: "bodyWeight",
    },
    sets: [
      { time: 60, calories: 40 },
      { time: 100, calories: 60 },
      { time: 150, calories: 80 },
    ],
  },
];

const exampleWorkout: LoggedWorkout = {
  id: 1,
  exercises: exampleExercises,
  date: "2023-03-30",
};

export const exampleWorkout2: LoggedWorkout = {
  id: 2,
  exercises: exampleExercises2,
  date: "2023-04-02",
};

export default exampleWorkout;
