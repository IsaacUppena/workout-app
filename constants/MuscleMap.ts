import { muscleGroupColors } from "./Colors";
import { Muscle, MuscleGroup, MuscleOptions } from "../models/Exercise";

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
