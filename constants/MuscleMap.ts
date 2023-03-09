import { exerciseTypeColors, muscleGroupColors } from "./Colors";
import {
  Equipment,
  Measurement,
  Muscle,
  MuscleGroup,
  MuscleOptions,
} from "../models/Exercise";

type MuscleGroupDef = {
  displayName: string;
  color: string;
  muscles: Muscle[];
};

export const muscleGroupMap = new Map<MuscleOptions, MuscleGroupDef>([
  [
    "arms",
    {
      displayName: "Arms",
      color: muscleGroupColors.arms,
      muscles: ["biceps", "wrists", "forearms", "triceps"],
    },
  ],

  [
    "back",
    {
      displayName: "Back",
      color: muscleGroupColors.back,
      muscles: ["lats", "lowerBack", "scapular", "traps"],
    },
  ],
  [
    "cardio",
    {
      displayName: "Cardio",
      color: muscleGroupColors.cardio,
      muscles: [],
    },
  ],
  [
    "chest",
    {
      displayName: "Chest",
      color: muscleGroupColors.chest,
      muscles: ["pecs", "serratus"],
    },
  ],
  [
    "core",
    {
      displayName: "Core",
      color: muscleGroupColors.core,
      muscles: ["abs", "obliques"],
    },
  ],
  [
    "legs",
    {
      displayName: "Legs",
      color: muscleGroupColors.legs,
      muscles: [
        "quads",
        "hamstrings",
        "glutes",
        "calves",
        "hips",
        "knees",
        "ankles",
      ],
    },
  ],
  [
    "neck",
    {
      displayName: "Neck",
      color: muscleGroupColors.neck,
      muscles: [],
    },
  ],
  [
    "shoulders",
    {
      displayName: "Shoulders",
      color: muscleGroupColors.shoulders,
      muscles: ["frontDelts", "midDelts", "rearDelts"],
    },
  ],
]);

type MuscleDef = {
  displayName: string;
  muscleGroup: string;
};

export const muscleMap = new Map<MuscleOptions, MuscleDef>([
  [
    "abs",
    {
      displayName: "Abs",
      muscleGroup: "core",
    },
  ],
  [
    "obliques",
    {
      displayName: "Obliques",
      muscleGroup: "core",
    },
  ],
  [
    "biceps",
    {
      displayName: "Biceps",
      muscleGroup: "arms",
    },
  ],
  [
    "forearms",
    {
      displayName: "Forearms",
      muscleGroup: "arms",
    },
  ],
  [
    "frontDelts",
    {
      displayName: "Front Delts",
      muscleGroup: "shoulders",
    },
  ],
  [
    "midDelts",
    {
      displayName: "Mid Delts",
      muscleGroup: "shoulders",
    },
  ],
  [
    "rearDelts",
    {
      displayName: "Rear Delts",
      muscleGroup: "shoulders",
    },
  ],
  [
    "wrists",
    {
      displayName: "Wrists",
      muscleGroup: "arms",
    },
  ],
  [
    "triceps",
    {
      displayName: "Triceps",
      muscleGroup: "arms",
    },
  ],
  [
    "traps",
    {
      displayName: "Traps",
      muscleGroup: "back",
    },
  ],
  [
    "lats",
    {
      displayName: "Lats",
      muscleGroup: "back",
    },
  ],
  [
    "lowerBack",
    {
      displayName: "Lower Back",
      muscleGroup: "back",
    },
  ],
  [
    "scapular",
    {
      displayName: "Scapular",
      muscleGroup: "back",
    },
  ],
  [
    "pecs",
    {
      displayName: "Pecs",
      muscleGroup: "chest",
    },
  ],
  [
    "serratus",
    {
      displayName: "Serratus",
      muscleGroup: "chest",
    },
  ],
  [
    "quads",
    {
      displayName: "Quads",
      muscleGroup: "legs",
    },
  ],
  [
    "hamstrings",
    {
      displayName: "Hamstrings",
      muscleGroup: "legs",
    },
  ],
  [
    "glutes",
    {
      displayName: "Glutes",
      muscleGroup: "legs",
    },
  ],
  [
    "calves",
    {
      displayName: "Calves",
      muscleGroup: "legs",
    },
  ],
  [
    "hips",
    {
      displayName: "Hips",
      muscleGroup: "legs",
    },
  ],
  [
    "knees",
    {
      displayName: "Knees",
      muscleGroup: "legs",
    },
  ],
  [
    "ankles",
    {
      displayName: "Ankles",
      muscleGroup: "legs",
    },
  ],
]);

type ExerciseTypeDef = {
  displayName: string;
  color: string;
  defaultMeasurements: Measurement[];
};

export const exerciseTypeMap = new Map<Equipment, ExerciseTypeDef>([
  [
    "barbell",
    {
      displayName: "Barbell",
      color: exerciseTypeColors.barbell,
      defaultMeasurements: ["weight", "reps"],
    },
  ],
  [
    "dumbbell",
    {
      displayName: "Dumbbell",
      color: exerciseTypeColors.dumbbell,
      defaultMeasurements: ["weight", "reps"],
    },
  ],
  [
    "ezBar",
    {
      displayName: "EZ Bar",
      color: exerciseTypeColors.ezBar,
      defaultMeasurements: ["weight", "reps"],
    },
  ],
  [
    "bodyWeight",
    {
      displayName: "Body Weight",
      color: exerciseTypeColors.bodyWeight,
      defaultMeasurements: [],
    },
  ],
  [
    "banded",
    {
      displayName: "Banded",
      color: exerciseTypeColors.banded,
      defaultMeasurements: ["reps"],
    },
  ],
  [
    "kettlebell",
    {
      displayName: "Kettlebell",
      color: exerciseTypeColors.kettlebell,
      defaultMeasurements: ["weight", "reps"],
    },
  ],
  [
    "machine",
    {
      displayName: "Machine",
      color: exerciseTypeColors.machine,
      defaultMeasurements: ["reps"],
    },
  ],
  [
    "weightPlate",
    {
      displayName: "Weight Plate",
      color: exerciseTypeColors.weightPlate,
      defaultMeasurements: ["weight", "reps"],
    },
  ],
  [
    "medicineBall",
    {
      displayName: "Medicine Ball",
      color: exerciseTypeColors.medicineBall,
      defaultMeasurements: ["weight", "reps"],
    },
  ],
  [
    "other",
    {
      displayName: "Other",
      color: exerciseTypeColors.other,
      defaultMeasurements: [],
    },
  ],
]);
