import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressRoutingModule } from './progress-routing-module';
import { Progress } from './progress';


@NgModule({
  declarations: [
    Progress
  ],
  imports: [
    CommonModule,
    ProgressRoutingModule
  ]
})
export class ProgressModule { }
