import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-own-coin-thumbnail',
  templateUrl: './own-coin-thumbnail.component.html',
  styleUrls: ['./own-coin-thumbnail.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class OwnCoinThumbnailComponent {
  @Input()
  public item;

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
  };}
