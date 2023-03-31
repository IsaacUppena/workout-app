import * as React from "react";
import { LoggedExercise, LoggedSet, LoggedWorkout } from "../models/Log";
import Storage from "../services/ExerciseService";

export type SettingsContextType = {
  settings: Settings;
  changeSettings: (newSettings: Settings) => void;
  getDefaultSettings: () => Settings;
};

export const SettingsContext = React.createContext<SettingsContextType | null>(
  null
);

export type Settings = {
  defaultLoggedSet: LoggedSet;
};

const defaultSettings: Settings = {
  defaultLoggedSet: {
    weight: 150,
    distance: 100,
    calories: 40,
    reps: 10,
    rpe: 8,
    time: 60,
  },
};

const SettingsProvider = ({ children }: any) => {
  const [settings, setSettings] = React.useState<Settings>(defaultSettings);

  // set up useEffect to get stored settings

  const changeSettings = (newSettings: Settings) => {
    setSettings(newSettings);
  };

  const getDefaultSettings = () => defaultSettings;

  return (
    <SettingsContext.Provider
      value={{
        settings,
        changeSettings,
        getDefaultSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
