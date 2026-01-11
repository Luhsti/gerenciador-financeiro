import { Component, computed, input } from '@angular/core';
import { Transaction } from '../../../../../../shared/transaction/interfaces/transaction';
import { CurrencyPipe } from '@angular/common';
import { TransactionType } from '../../../../../../shared/transaction/enums/transaction-type';

const CssClasses = {
  [TransactionType.INCOME]: 'income',
  [TransactionType.OUTCOME]: 'outcome'
}

@Component({
  selector: 'app-transaction-value',
  imports: [CurrencyPipe],
  templateUrl: './transaction-value.html',
  styleUrl: './transaction-value.scss',
  host: {
    '[class]': 'cssClass()'
  }
})
export class TransactionValue {

  transaction = input.required<Transaction>();

  cssClass = computed(() => {
    return CssClasses[this.transaction().type];
  })

}
