import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-own-coin-thumbnail',
  templateUrl: './own-coin-thumbnail.component.html',
  styleUrls: ['./own-coin-thumbnail.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class OwnCoinThumbnailComponent {
  @Input()
  public item;

  public CSTTBtnState = {
    name: 'Buy',
    class: 'redBig'
  };

  public depositBtnState = {
    name: 'Deposit',
    class: 'emptyGreen'
  };

  public withdrawalBtnState = {
    name: 'Withdrawal',
    class: 'emptyRed'
  }; }
