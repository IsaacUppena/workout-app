import { MuscleViewProps } from "../components/MuscleAnatomy";
import { MuscleGroup } from "../models/Exercise";

export const MuscleViewScaling = new Map<MuscleGroup, MuscleViewProps>([
  [
    "arms",
    {
      viewScaleFactor: 1.9,
      offsetX: 11.5,
      offsetY: 25,
    },
  ],
  [
    "back",
    {
      viewScaleFactor: 2.5,
      offsetX: 15,
      offsetY: 10,
    },
  ],
  [
    "cardio",
    {
      viewScaleFactor: 3,
      offsetX: 16.5,
      offsetY: 10,
    },
  ],
  [
    "chest",
    {
      viewScaleFactor: 3,
      offsetX: 16,
      offsetY: 10,
    },
  ],
  [
    "core",
    {
      viewScaleFactor: 3,
      offsetX: 16.5,
      offsetY: 40,
    },
  ],
  [
    "legs",
    {
      viewScaleFactor: 1.6,
      offsetX: 8,
      offsetY: 80,
    },
  ],
  [
    "shoulders",
    {
      viewScaleFactor: 3,
      offsetX: 16.5,
      offsetY: 0,
    },
  ],
  [
    "neck",
    {
      viewScaleFactor: 3,
      offsetX: 16.5,
      offsetY: 0,
    },
  ],
]);
