import { Routes } from '@angular/router';
import { Workout } from './workout';
import { WorkoutSessionPage } from './pages/workout-session-page/workout-session-page';

export const WORKOUT_ROUTES: Routes = [
  {
    path: '',
    component: Workout,
    children: [
      { path: 'session/:planId', component: WorkoutSessionPage },
      { path: '', redirectTo: 'session/demo', pathMatch: 'full' },
    ],
  },
];
