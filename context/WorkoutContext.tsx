import * as React from "react";
import { LoggedExercise, LoggedWorkout } from "../models/Log";
import Storage from "../services/ExerciseService";

export type WorkoutContextType = {
  workout: LoggedWorkout | null;
  switchWorkout: (newWorkout: LoggedWorkout | null) => void;
  updateWorkout: (newWorkout: LoggedWorkout) => void;
  createWorkout: (newWorkout: LoggedWorkout) => void;
  deleteWorkout: (deletedWorkout: LoggedWorkout) => void;
};

export const WorkoutContext = React.createContext<WorkoutContextType | null>(
  null
);

const WorkoutProvider = ({ children }: any) => {
  const [workout, setWorkout] = React.useState<LoggedWorkout | null>(null);

  const switchWorkout = (newWorkout: LoggedWorkout | null) => {
    setWorkout(newWorkout);
  };

  const updateWorkout = (newWorkout: LoggedWorkout) => {
    setWorkout(newWorkout);
    Storage.updateWorkout(newWorkout);
  };

  const createWorkout = (newWorkout: LoggedWorkout) => {
    setWorkout(newWorkout);
    Storage.createWorkout(newWorkout);
  };

  const deleteWorkout = (deletedWorkout: LoggedWorkout) => {
    setWorkout(null);
    Storage.deleteWorkout(deletedWorkout.id);
  };

  return (
    <WorkoutContext.Provider
      value={{
        workout,
        switchWorkout,
        updateWorkout,
        createWorkout,
        deleteWorkout,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;
