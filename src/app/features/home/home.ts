import { Component, OnInit, signal } from '@angular/core';
import { Balance } from './components/balance/balance';
import { TransactionItem } from './components/transaction-item/transaction-item';
import { Transaction } from '../../shared/transaction/interfaces/transaction';
import { NoTransactions } from './components/no-transactions/no-transactions';
import { TransactionService } from '../../shared/transaction/services/transaction';

@Component({
  selector: 'app-home',
  imports: [Balance, TransactionItem, NoTransactions],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {

  constructor(
    private transactionService: TransactionService
  ){}

  transactions = signal<Transaction[]>([]);
  ngOnInit(){
    this.transactionService.getAllTransactions().subscribe((data) => {
      this.transactions.set(data);
    });
  }


}
