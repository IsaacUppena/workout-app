import { Exercise } from "./Exercise";

export type LoggedSet = {
  reps?: number;
  weight?: number;
  calories?: number;
  time?: number;
  rpe?: number;
};

export type LoggedExercise = {
  exercise: Exercise;
  sets: LoggedSet[];
};

export type LoggedWorkout = {
  exercises: LoggedExercise[];
  date: string;
  notes?: string;
  mood?: 0 | 1 | 2;
};
