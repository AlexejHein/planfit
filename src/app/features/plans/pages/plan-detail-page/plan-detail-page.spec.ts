import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanDetailPage } from './plan-detail-page';

describe('PlanDetailPage', () => {
  let component: PlanDetailPage;
  let fixture: ComponentFixture<PlanDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanDetailPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanDetailPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
