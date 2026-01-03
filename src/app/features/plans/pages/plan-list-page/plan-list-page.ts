import { Component } from '@angular/core';
import { PlansService } from '../../../../core/plans.service';
import { Plan } from '../../../../shared/models/plan';
import {MatButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {MatCard, MatCardActions, MatCardSubtitle, MatCardTitle} from '@angular/material/card';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-plan-list-page',
  templateUrl: './plan-list-page.html',
  styleUrl: './plan-list-page.css',
  imports: [
    MatButton,
    RouterLink,
    MatCard,
    MatCardTitle,
    MatCardSubtitle,
    MatCardActions,
    NgIf,
    NgForOf
  ],
  standalone: true
})
export class PlanListPage {
  plans: Plan[] = [];

  constructor(private plansService: PlansService) {
    this.reload();
  }

  remove(id: string) {
    this.plansService.delete(id);
    this.reload();
  }

  duplicate(id: string) {
    this.plansService.duplicate(id);
    this.reload();
  }

  private reload() {
    this.plans = this.plansService.list();
  }
}
