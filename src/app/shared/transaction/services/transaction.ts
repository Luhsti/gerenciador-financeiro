import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Transaction } from '../interfaces/transaction';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {

    constructor(
      private httpClient: HttpClient
    ) {}


    getAllTransactions(){
      return this.httpClient.get<Transaction[]>('http://localhost:3000/transactions')
   };
   
}
