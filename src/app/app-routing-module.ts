import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './features/home/home-page/home-page';


const routes: Routes = [
  { path: '', component: HomePage },

  {
    path: 'plans',
    loadChildren: () =>
      import('./features/plans/plans-module').then(m => m.PlansModule),
  },
  {
    path: 'workout',
    loadChildren: () =>
      import('./features/workout/workout.routes').then(m => m.WORKOUT_ROUTES),
  },
  {
    path: 'progress',
    loadChildren: () =>
      import('./features/progress/progress-module').then(m => m.ProgressModule),
  },

  { path: '**', redirectTo: '' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
