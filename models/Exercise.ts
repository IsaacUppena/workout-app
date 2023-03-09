// export type Muscle =
//   | "abs"
//   | "obliques"
//   | "biceps"
//   | "forearms"
//   | "frontDelts"
//   | "midDelts"
//   | "rearDelts"
//   | "wrists"
//   | "triceps"
//   | "traps"
//   | "lats"
//   | "lowerBack"
//   | "scapular"
//   | "pecs"
//   | "serratus"
//   | "quads"
//   | "hamstrings"
//   | "glutes"
//   | "calves"
//   | "hips"
//   | "knees"
//   | "ankles"
//   | "neck";

export const muscles = [
  "abs",
  "obliques",
  "biceps",
  "forearms",
  "frontDelts",
  "midDelts",
  "rearDelts",
  "wrists",
  "triceps",
  "traps",
  "lats",
  "lowerBack",
  "scapular",
  "pecs",
  "serratus",
  "quads",
  "hamstrings",
  "glutes",
  "calves",
  "hips",
  "knees",
  "ankles",
] as const;
export type Muscle = typeof muscles[number];

export const muscleGroups = [
  "arms",
  "back",
  "cardio",
  "chest",
  "core",
  "legs",
  "shoulders",
  "neck",
] as const;
export type MuscleGroup = typeof muscleGroups[number];
export type MuscleOptions = Muscle | MuscleGroup;

export const equipment = [
  "barbell",
  "dumbbell",
  "bodyWeight",
  "banded",
  "ezBar",
  "kettlebell",
  "machine",
  "weightPlate",
  "medicineBall",
  "other",
] as const;
export type Equipment = typeof equipment[number];

export const measurements = [
  "weight",
  "calories",
  "time",
  "reps",
  "rpe",
] as const;
export type Measurement = typeof measurements[number];

// export type Measurements = "reps" | "weight" | "calories" | "time" | "rpe";

export type Exercise = {
  name: string;
  primaryMuscle: MuscleOptions;
  secondaryMuscles?: MuscleOptions[];
  equipment?: Equipment[];
  measurements: Measurement[];
  instructions?: string[];
};
