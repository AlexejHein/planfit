import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PlansService } from '../../../../core/plans.service';
import { Plan } from '../../../../shared/models/plan';
import { SEED_EXERCISES } from '../../../../shared/models/exercises.seed';

import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

type SetInput = { reps: number | null; weight: number | null };

@Component({
  selector: 'app-workout-session-page',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    FormsModule,
    RouterLink,

    MatCard,
    MatCardTitle,
    MatCardContent,
    MatButton,
    MatFormField,
    MatLabel,
    MatInput,
  ],
  templateUrl: './workout-session-page.html',
  styleUrl: './workout-session-page.css',
})
export class WorkoutSessionPage {
  planId = '';
  plan?: Plan;

  // pro exerciseId ein Set (MVP)
  setsByExercise: Record<string, SetInput> = {};

  constructor(private route: ActivatedRoute, private plansService: PlansService) {
    this.planId = this.route.snapshot.paramMap.get('planId') ?? '';
    this.plan = this.plansService.get(this.planId);

    // MVP: falls plan nicht gefunden -> leer lassen
    if (this.plan) {
      for (const item of this.plan.items) {
        this.setsByExercise[item.exerciseId] = { reps: null, weight: null };
      }
    }
  }

  exerciseName(exerciseId: string): string {
    return SEED_EXERCISES.find(e => e.id === exerciseId)?.name ?? exerciseId;
  }

  saveSession() {
    if (!this.plan) return;

    // MVP: einfach in LocalStorage speichern
    const payload = {
      id: crypto.randomUUID(),
      planId: this.plan.id,
      planName: this.plan.name,
      createdAt: new Date().toISOString(),
      entries: this.plan.items.map(i => ({
        exerciseId: i.exerciseId,
        reps: this.setsByExercise[i.exerciseId]?.reps ?? null,
        weight: this.setsByExercise[i.exerciseId]?.weight ?? null,
      })),
    };

    const key = 'planfit_sessions_v1';
    const existing = localStorage.getItem(key);
    const sessions = existing ? JSON.parse(existing) : [];
    sessions.unshift(payload);
    localStorage.setItem(key, JSON.stringify(sessions));

    alert('Workout saved!');
  }
}
