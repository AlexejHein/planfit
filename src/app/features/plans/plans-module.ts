import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlansRoutingModule } from './plans-routing-module';
import { Plans } from './plans';
import { PlanListPage } from './pages/plan-list-page/plan-list-page';
import { PlanCreatePage } from './pages/plan-create-page/plan-create-page';
import { PlanDetailPage } from './pages/plan-detail-page/plan-detail-page';
import {MatButton} from '@angular/material/button';
import {MatCard, MatCardActions, MatCardContent, MatCardSubtitle, MatCardTitle} from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import {MatOption, MatSelect} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import {MatInput} from '@angular/material/input';


@NgModule({
  declarations: [
    Plans,
  ],
  imports: [
    CommonModule,
    PlansRoutingModule,
    MatButton,
    MatCard,
    MatCardTitle,
    MatCardSubtitle,
    MatCardActions,
    MatCardContent,
    MatFormField,
    MatSelect,
    MatOption,
    FormsModule,
    MatInput,
    PlanListPage,
    PlanCreatePage,
    PlanDetailPage,
  ]
})
export class PlansModule { }
