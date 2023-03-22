import { LoggedExercise, LoggedWorkout } from "../models/Log";

const exampleExercises: LoggedExercise[] = [
  {
    exercise: {
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
      name: "Dumbbell Suitcase Carry",
      primaryMuscle: "forearms",
      secondaryMuscles: ["core", "traps"],
      measurements: ["weight", "distance"],
      resistanceType: "dumbbell",
    },
    sets: [
      { distance: 10, weight: 160, rpe: 7.5 },
      { distance: 10, weight: 170, rpe: 8.5 },
      { distance: 8, weight: 180, rpe: 9.5 },
    ],
  },
  {
    exercise: {
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
  exercises: exampleExercises,
  date: "2023-03-21",
};

export const exampleWorkout2: LoggedWorkout = {
  exercises: exampleExercises2,
  date: "2023-03-22",
};

export default exampleWorkout;
