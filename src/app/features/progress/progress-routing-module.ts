import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Progress } from './progress';

const routes: Routes = [{ path: '', component: Progress }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgressRoutingModule { }
