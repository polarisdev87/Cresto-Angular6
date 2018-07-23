import { MatDialog } from '@angular/material';
import { IRootState } from './../../myreferrals/store/reducers/index';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { GenerateWalletAddressRequest } from '../../../store/actions/wallets.action';
import { PopupComponent } from '../../buy/popup/popup.component';

@Component({
  selector: 'app-depositview',
  templateUrl: './depositview.component.html',
  styleUrls: ['./depositview.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class DepositviewComponent  {

  @Input('coin')
  public set currentCoin(coin: WalletData) {
    if (!coin) {
      return;
    }
    this.coin = coin;
    if (!this.coin.top_up_address && this.coin.id) {
      this._store.dispatch(new GenerateWalletAddressRequest({ wallet_id: this.coin.id }));
    }
  }

  public coin!: WalletData;
  public depositBtn = {
    name: 'Copy address',
    class: 'emptyGreen'
  };

  public confirmButton = true;
  public constructor(
    private _store: Store<IRootState>,
    private _dialog: MatDialog
  ) {

  }

  public confirmSelected() {
    this.confirmButton = !this.confirmButton;
  }

  public openPopupCopyAddress() {
    this._dialog.open(PopupComponent, {
      data: {
        iconClose: 'icon-close',
        iconClass: 'icon-tick',
        message: 'The address has been copied to the clipboard',
      }
    });
  }

}
