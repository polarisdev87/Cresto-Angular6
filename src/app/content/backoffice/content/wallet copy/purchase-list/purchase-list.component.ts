import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.sass']
})
export class PurchaseListComponent implements OnInit {
  @Input()
  public purchase;
  public purchaseHead = ['Created', 'Coin', 'Amount', 'Unit Price($)', 'Paid with', 'Total paid'];

  public constructor() { }

  public ngOnInit() {
  }

}
