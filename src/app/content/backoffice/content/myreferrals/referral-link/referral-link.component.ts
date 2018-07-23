import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PopupComponent } from '../../buy/popup/popup.component';

@Component({
  selector: 'app-referral-link',
  templateUrl: './referral-link.component.html',
  styleUrls: ['./referral-link.component.sass']
})
export class ReferralLinkComponent {

  public copyButton = {
    name: 'Copy address',
    class: 'emptyGreen'
  };
  @Input()
  public referralLink;

  public constructor(
    private _dialog: MatDialog
  ) {}
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
