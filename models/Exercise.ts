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

export const resistanceTypes = [
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
export type ResistanceType = typeof resistanceTypes[number];

export const measurements = [
  "weight",
  "calories",
  "time",
  "reps",
  "distance",
  "rpe",
] as const;
export type Measurement = typeof measurements[number];

export type Exercise = {
  id: string;
  name: string;
  primaryMuscle: MuscleOptions;
  secondaryMuscles?: MuscleOptions[];
  resistanceType: ResistanceType;
  measurements: Measurement[];
  instructions?: string[];
};
