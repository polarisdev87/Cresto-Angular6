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

  @Input()
  public crestokenBuySellTableBoolean;

  // tslint:disable-next-line
  public CSTTBtnState = {
    name: 'Buy',
    class: 'redBig'
  };
}
