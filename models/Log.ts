import { Exercise } from "./Exercise";

export type LoggedSet = {
  reps?: number;
  weight?: number;
  calories?: number;
  time?: number;
  distance?: number;
  rpe?: number;
  [key: string]: any;
};

export type LoggedExercise = {
  exercise: Exercise;
  sets: LoggedSet[];
};

export type LoggedWorkout = {
  id: number;
  exercises: LoggedExercise[];
  date: string;
  notes?: string;
  mood?: 0 | 1 | 2;
};
