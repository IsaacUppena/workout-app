import { Measurement } from "../models/Exercise";
import { measurementColors } from "./Colors";

type MeasurementDef = {
  displayName: string;
  color: string;
};

export const measurementMap = new Map<Measurement, MeasurementDef>([
  [
    "calories",
    {
      displayName: "Calories",
      color: measurementColors.calories,
    },
  ],
  [
    "reps",
    {
      displayName: "Reps",
      color: measurementColors.reps,
    },
  ],
  [
    "rpe",
    {
      displayName: "RPE",
      color: measurementColors.rpe,
    },
  ],
  [
    "time",
    {
      displayName: "Time",
      color: measurementColors.time,
    },
  ],
  [
    "weight",
    {
      displayName: "Weight",
      color: measurementColors.weight,
    },
  ],
  [
    "distance",
    {
      displayName: "Distance",
      color: measurementColors.distance,
    },
  ],
]);
