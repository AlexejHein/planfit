import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Plans } from './plans';
import { PlanListPage } from './pages/plan-list-page/plan-list-page';
import { PlanCreatePage } from './pages/plan-create-page/plan-create-page';
import { PlanDetailPage } from './pages/plan-detail-page/plan-detail-page';

const routes: Routes = [
  {
    path: '',
    component: Plans,
    children: [
      { path: '', component: PlanListPage },
      { path: 'create', component: PlanCreatePage },
      { path: ':id', component: PlanDetailPage },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlansRoutingModule {}
