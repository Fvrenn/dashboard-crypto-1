import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWalletsComponent } from './card-wallets.component';

describe('CardWalletsComponent', () => {
  let component: CardWalletsComponent;
  let fixture: ComponentFixture<CardWalletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardWalletsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardWalletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
