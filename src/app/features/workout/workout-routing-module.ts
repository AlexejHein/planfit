import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Workout } from './workout';

const routes: Routes = [{ path: '', component: Workout }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkoutRoutingModule { }
