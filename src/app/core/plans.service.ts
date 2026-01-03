import { Injectable } from '@angular/core';
import { Plan } from '../shared/models/plan';

const KEY = 'planfit_plans_v1';

@Injectable({ providedIn: 'root' })
export class PlansService {
  list(): Plan[] {
    return this.read();
  }

  get(id: string): Plan | undefined {
    return this.read().find(p => p.id === id);
  }

  create(name: string, exerciseIds: string[]): Plan {
    const now = new Date().toISOString();
    const plan: Plan = {
      id: crypto.randomUUID(),
      name,
      items: exerciseIds.map((exerciseId, idx) => ({ exerciseId, order: idx })),
      createdAt: now,
      updatedAt: now,
    };

    const plans = this.read();
    plans.unshift(plan);
    this.write(plans);
    return plan;
  }

  delete(id: string) {
    this.write(this.read().filter(p => p.id !== id));
  }

  duplicate(id: string): Plan | undefined {
    const original = this.get(id);
    if (!original) return undefined;

    const now = new Date().toISOString();
    const copy: Plan = {
      ...original,
      id: crypto.randomUUID(),
      name: original.name + ' (Copy)',
      createdAt: now,
      updatedAt: now,
    };

    const plans = this.read();
    plans.unshift(copy);
    this.write(plans);
    return copy;
  }

  private read(): Plan[] {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Plan[]) : [];
  }

  private write(plans: Plan[]) {
    localStorage.setItem(KEY, JSON.stringify(plans));
  }
}
