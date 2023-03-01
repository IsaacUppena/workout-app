export type Muscle =
  | "abs"
  | "obliques"
  | "biceps"
  | "forearms"
  | "frontDelts"
  | "midDelts"
  | "rearDelts"
  | "wrists"
  | "triceps"
  | "traps"
  | "lats"
  | "lowerBack"
  | "scapular"
  | "pecs"
  | "serratus"
  | "quads"
  | "hamstrings"
  | "glutes"
  | "calves"
  | "hips"
  | "knees"
  | "ankles";

export type MuscleGroup =
  | "arms"
  | "back"
  | "cardio"
  | "chest"
  | "core"
  | "legs"
  | "shoulders";

export type MuscleOptions = Muscle | MuscleGroup;

export type Equipment =
  | "barbell"
  | "dumbbell"
  | "bench"
  | "bodyWeight"
  | "bands"
  | "ezBar"
  | "kettlebell"
  | "machine"
  | "weightPlate"
  | "medicineBall"
  | "other";

export type Measurements = "reps" | "weight" | "calories" | "time" | "rpe";

export type Exercise = {
  name: string;
  primaryMuscle: MuscleOptions;
  secondaryMuscles?: MuscleOptions[];
  equipment?: Equipment[];
  measurements: Measurements[];
  instructions?: string[];
};
