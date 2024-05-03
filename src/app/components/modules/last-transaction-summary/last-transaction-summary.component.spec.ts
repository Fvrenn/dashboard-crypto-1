import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastTransactionSummaryComponent } from './last-transaction-summary.component';

describe('LastTransactionSummaryComponent', () => {
  let component: LastTransactionSummaryComponent;
  let fixture: ComponentFixture<LastTransactionSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LastTransactionSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LastTransactionSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
