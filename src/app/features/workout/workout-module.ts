import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkoutRoutingModule } from './workout-routing-module';
import { Workout } from './workout';


@NgModule({
  declarations: [
    Workout
  ],
  imports: [
    CommonModule,
    WorkoutRoutingModule
  ]
})
export class WorkoutModule { }
