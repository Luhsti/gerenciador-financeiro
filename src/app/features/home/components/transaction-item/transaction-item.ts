import { Component, input } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Transaction } from '../../../../shared/transaction/interfaces/transaction';
import { CurrencyPipe } from '@angular/common';
import { TransactionValue } from './component/transaction-value/transaction-value';

@Component({
  selector: 'app-transaction-item',
  imports: [MatCardModule, MatButtonModule, TransactionValue],
  templateUrl: './transaction-item.html',
  styleUrl: './transaction-item.scss',
})
export class TransactionItem {
  
  transaction = input.required<Transaction>();

}
