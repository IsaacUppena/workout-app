import { LoggedExercise, LoggedWorkout } from "../models/Log";
import exampleWorkout, { exampleWorkout2 } from "../constants/ExampleWorkout";

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
