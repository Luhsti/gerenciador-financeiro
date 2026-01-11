import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoTransactions } from './no-transactions';

describe('NoTransactions', () => {
  let component: NoTransactions;
  let fixture: ComponentFixture<NoTransactions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoTransactions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoTransactions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
