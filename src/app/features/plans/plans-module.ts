import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlansRoutingModule } from './plans-routing-module';
import { Plans } from './plans';
import { PlanListPage } from './pages/plan-list-page/plan-list-page';
import { PlanCreatePage } from './pages/plan-create-page/plan-create-page';
import { PlanDetailPage } from './pages/plan-detail-page/plan-detail-page';


@NgModule({
  declarations: [
    Plans,
    PlanListPage,
    PlanCreatePage,
    PlanDetailPage
  ],
  imports: [
    CommonModule,
    PlansRoutingModule
  ]
})
export class PlansModule { }
