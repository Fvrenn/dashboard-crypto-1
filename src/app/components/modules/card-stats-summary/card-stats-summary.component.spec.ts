import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStatsSummaryComponent } from './card-stats-summary.component';

describe('CardStatsSummaryComponent', () => {
  let component: CardStatsSummaryComponent;
  let fixture: ComponentFixture<CardStatsSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardStatsSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardStatsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
