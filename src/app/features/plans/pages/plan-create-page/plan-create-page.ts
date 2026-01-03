import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import { PlansService } from '../../../../core/plans.service';
import { SEED_EXERCISES } from '../../../../shared/models/exercises.seed';
import {MatCard, MatCardActions, MatCardContent} from '@angular/material/card';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatOption, MatSelect} from '@angular/material/select';
import {NgForOf} from '@angular/common';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-plan-create-page',
  templateUrl: './plan-create-page.html',
  styleUrl: './plan-create-page.css',
  imports: [
    MatCard,
    MatCardContent,
    MatFormField,
    MatInput,
    FormsModule,
    MatLabel,
    MatSelect,
    MatOption,
    NgForOf,
    MatCardActions,
    MatButton,
    RouterLink
  ],
  standalone: true
})
export class PlanCreatePage {
  name = '';
  exercises = SEED_EXERCISES;
  selected: string[] = [];

  constructor(private plansService: PlansService, private router: Router) {}

  canSave() {
    return this.name.trim().length > 0 && this.selected.length > 0;
  }

  save() {
    const plan = this.plansService.create(this.name.trim(), this.selected);
    this.router.navigate(['/plans', plan.id]).then(r => r);
  }
}
