import { Exercise } from './plan';

export const SEED_EXERCISES: Exercise[] = [
  { id: 'sq', name: 'Squat', muscleGroup: 'Legs', equipment: 'Barbell' },
  { id: 'bp', name: 'Bench Press', muscleGroup: 'Push', equipment: 'Barbell' },
  { id: 'dl', name: 'Deadlift', muscleGroup: 'Pull', equipment: 'Barbell' },
  { id: 'ohp', name: 'Overhead Press', muscleGroup: 'Push', equipment: 'Barbell' },
  { id: 'row', name: 'Row (Machine)', muscleGroup: 'Pull', equipment: 'Machine' },
  { id: 'plk', name: 'Plank', muscleGroup: 'Core', equipment: 'Bodyweight' },
];
