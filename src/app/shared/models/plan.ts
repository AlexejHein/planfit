export type MuscleGroup = 'Push' | 'Pull' | 'Legs' | 'Core' | 'Full';
export type Equipment = 'Bodyweight' | 'Dumbbell' | 'Barbell' | 'Machine' | 'Other';

export interface Exercise {
  id: string;
  name: string;
  muscleGroup: MuscleGroup;
  equipment: Equipment;
}

export interface PlanItem {
  exerciseId: string;
  order: number;
}

export interface Plan {
  id: string;
  name: string;
  items: PlanItem[];
  createdAt: string;
  updatedAt: string;
}
