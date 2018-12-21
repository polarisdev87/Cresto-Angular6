import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { IRootState } from './../../myreferrals/store/reducers/index';
import { Store } from '@ngrx/store';
import { GenerateWalletAddressRequest } from '../../../store/actions/wallets.action';
import { PopupComponent } from '../../buy/popup/popup.component';

@Component({
  selector: 'app-depositview',
  templateUrl: './depositview.component.html',
  styleUrls: ['./depositview.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class DepositviewComponent {

  @Input()
  public coin!: WalletData;
  @Output()
  public onClose = new EventEmitter();
  public confirmButton = true;
  public constructor(
    private _store: Store<IRootState>,
    private _dialog: MatDialog
  ) {
  }

  public set currentCoin(coin: WalletData) {
    if (!coin) {
      return;
    }
    this.coin = coin;
    if (!this.coin.top_up_address && this.coin.id) {
      this._store.dispatch(new GenerateWalletAddressRequest({ wallet_id: this.coin.id }));
    }
  }

  public confirmSelected() {
    this.confirmButton = !this.confirmButton;
  }

  public copyAddress() {
    this.onClose.emit();
    this._dialog.open(PopupComponent, {
      data: {
        iconClose: 'icon-close',
        iconClass: 'icon-tick',
        message: 'The address has been copied to the clipboard',
      }
    });
  }

}
