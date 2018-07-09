import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-other-coin-thumbnail',
  templateUrl: './other-coin-thumbnail.component.html',
  styleUrls: ['./other-coin-thumbnail.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class OtherCoinThumbnailComponent {
  @Input()
  public item;

  @Input()
  public fullMode;

  @Output()
  public setDeposit = new EventEmitter();

  @Output() setWithdrawal = new EventEmitter();

  CSTTBtnState = {
    name: 'Buy',
    class: 'redBig'
  };

  depositBtnState = {
    name: 'Deposit',
    class: 'emptyGreen'
  };

  withdrawalBtnState = {
    name: 'Withdrawal',
    class: 'emptyRed'
  };

  public setDepositCoin(coin) {
    this.setDeposit.next(coin);
  }

  setWithdrawalCoin(coin) {
    this.setWithdrawal.emit(coin);
  }

}
