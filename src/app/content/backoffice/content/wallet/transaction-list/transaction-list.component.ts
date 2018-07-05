import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.sass']
})
export class TransactionListComponent  {
  @Input()
  transactions;
  public transactionsHistoryHead =['Created Date (JMT)', 'Coin', 'Amount', 'Type', 'Status', 'Hash'];

}
