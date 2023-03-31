import { LoggedExercise, LoggedWorkout } from "../models/Log";
import exampleWorkout, { exampleWorkout2 } from "../constants/ExampleWorkout";
import { MuscleOptions, ResistanceType } from "../models/Exercise";
import exampleExercises from "../constants/ExampleExercises";

/**
 * Returns workout logged on a particular date
 * @param date - date string in YYYY-MM-DD format
 */

async function getWorkoutByDate(date: string): Promise<LoggedWorkout | null> {
  const newDate = new Date(date);
  if (date === exampleWorkout2.date) {
    return Promise.resolve(exampleWorkout2);
  } else if (date === exampleWorkout.date) {
    return Promise.resolve(exampleWorkout);
  } else {
    return Promise.resolve(null);
  }
}

/**
 * Adds a newly created workout to local storage
 * @param newWorkout - newly created workout
 */
async function createWorkout(newWorkout: LoggedWorkout) {
  // Get id increment from local storage
  // Add workout to collection

  return Promise.resolve("Successfully created new workout");
}

/**
 * Updates an existing workout in local storage
 * @param newWorkout - updated version of workout
 */
async function updateWorkout(newWorkout: LoggedWorkout) {}

/**
 * Deletes an existing workout in local storage
 * @param workoutId - unique identifier for workout
 */
async function deleteWorkout(workoutId: number) {}

/**
 * Returns exercises based on parameters
 * @param primaryMuscles - filter for exercises with these primary muscles
 * @param secondaryMuscles - filter for exercises with these secondary muscles
 * @param resistanceType - filter for exercises with these resistance types
 */
async function getExercisesByCriteria(
  primaryMuscles?: MuscleOptions,
  secondaryMuscles?: MuscleOptions,
  resistanceType?: ResistanceType
) {
  return Promise.resolve(exampleExercises);
}

async function getNewId() {
  return Promise.resolve(1);
}

export default {
  getNewId,
  createWorkout,
  updateWorkout,
  deleteWorkout,
  getWorkoutByDate,
  getExercisesByCriteria,
};
