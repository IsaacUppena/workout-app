import * as React from "react";
import { LoggedExercise, LoggedWorkout } from "../models/Log";
import { getWorkoutByDate } from "../services/ExerciseService";

export type WorkoutContextType = {
  workout: LoggedWorkout;
  setNewWorkout: (newWorkout: LoggedWorkout) => void;
  addExercise: (loggedExercise: LoggedExercise) => void;
  removeExercise: (loggedExercise: LoggedExercise) => void;
};

export const WorkoutContext = React.createContext<WorkoutContextType | null>(
  null
);

const WorkoutProvider = ({ children }) => {
  const [workout, setWorkout] = React.useState<LoggedWorkout>(
    {} as LoggedWorkout
  );

  const initializeWorkout = async () => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-CA");
    const newWorkout = await getWorkoutByDate(formattedDate);
    setWorkout(newWorkout);
  };

  React.useEffect(() => {
    initializeWorkout();
  }, []);

  const setNewWorkout = (newWorkout: LoggedWorkout) => {
    console.log(newWorkout.id);
    setWorkout(newWorkout);
  };

  const addExercise = (loggedExercise: LoggedExercise) => {
    const oldExercises = workout.exercises;
    setWorkout({ ...workout, exercises: [...oldExercises, loggedExercise] });
  };

  const removeExercise = (loggedExercise: LoggedExercise) => {
    const oldExercises = workout.exercises;
    const newExercises = oldExercises.filter(
      (e) => e.exercise.id !== loggedExercise.exercise.id
    );
    setWorkout({ ...workout, exercises: newExercises });
  };

  return (
    <WorkoutContext.Provider
      value={{ workout, setNewWorkout, addExercise, removeExercise }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;
