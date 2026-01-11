import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionValue } from './transaction-value';

describe('TransactionValue', () => {
  let component: TransactionValue;
  let fixture: ComponentFixture<TransactionValue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionValue]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionValue);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
