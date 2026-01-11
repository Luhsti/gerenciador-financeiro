import { Component, signal } from '@angular/core';
import { Balance } from './components/balance/balance';
import { TransactionItem } from './components/transaction-item/transaction-item';
import { Transaction } from '../../shared/transaction/interfaces/transaction';
import { TransactionType } from '../../shared/transaction/enums/transaction-type';
import { NoTransactions } from './components/no-transactions/no-transactions';

@Component({
  selector: 'app-home',
  imports: [Balance, TransactionItem, NoTransactions],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  transactions = signal<Transaction[]>([
    // {value: 100, type: TransactionType.INCOME, title: 'Freelance Work'},
    // {value: 50, type: TransactionType.INCOME, title: 'Salary'},
    // {value: 50, type: TransactionType.OUTCOME, title: 'Groceries'},
    // {value: 25, type: TransactionType.OUTCOME, title: 'Utilities'},
  ]);

}
