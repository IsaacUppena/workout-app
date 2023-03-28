import { LoggedExercise, LoggedWorkout } from "../models/Log";
import exampleWorkout, { exampleWorkout2 } from "../constants/ExampleWorkout";
import { MuscleOptions, ResistanceType } from "../models/Exercise";
import exampleExercises from "../constants/ExampleExercises";

/**
 * Returns workout logged on a particular date
 * @param date - date string in YYYY-MM-DD format
 */
export async function getWorkoutByDate(date: string): Promise<LoggedWorkout> {
  const newDate = new Date(date);
  if (newDate.getDay() % 2 === 0) {
    return Promise.resolve(exampleWorkout2);
  } else {
    return Promise.resolve(exampleWorkout);
  }
}

/**
 * Returns exercises based on parameters
 * @param primaryMuscles - filter for exercises with these primary muscles
 * @param secondaryMuscles - filter for exercises with these secondary muscles
 * @param resistanceType - filter for exercises with these resistance types
 */
export async function getExercisesByCriteria(
  primaryMuscles?: MuscleOptions,
  secondaryMuscles?: MuscleOptions,
  resistanceType?: ResistanceType
) {
  return Promise.resolve(exampleExercises);
}
