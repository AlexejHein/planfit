import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkoutRoutingModule } from './workout-routing-module';
import { Workout } from './workout';
import {MatButton} from "@angular/material/button";
import { WorkoutSessionPage } from './pages/workout-session-page/workout-session-page';


@NgModule({
  declarations: [
    Workout,
    WorkoutSessionPage
  ],
    imports: [
        CommonModule,
        WorkoutRoutingModule,
        MatButton
    ]
})
export class WorkoutModule { }
