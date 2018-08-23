import { environment } from '../../../../../environments/environment';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { MatDialog } from '@angular/material';
import { PopupComponent } from '../buy/popup/popup.component';
import { GetReferralUsers } from './store/actions/referrals-users.action';
import { IRootState } from '../../../../store/reducers';
import { getReferralUsers } from './store/selectors/referralUsers.selector';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.sass']
})
export class TeamComponent implements OnInit, OnDestroy {

  public referrals$!: Observable<User[]>;
  public totalCommissions: number = 0;
  public referralLink;
  public userSubscription!: Subscription;
  public loader$!: Observable<boolean>;
  public view: string = 'referrals';
  public copyButton = {
    name: 'Copy address',
    class: 'emptyGreen'
  };

  public constructor(
    private _store: Store<IRootState>,
    private _dialog: MatDialog
  ) {
  }

  public ngOnInit(): void {
    this.referrals$ = this._store.select(getReferralUsers);
    this.referrals$.subscribe((referrals: any[]) => {
      referrals.forEach((ref: any) => this.totalCommissions += ref.commission);
      if (!this.totalCommissions) {
        this.totalCommissions = 0;
      }
    });
    this.loader$ = this._store.select('referrals', 'referralUsers', 'isLoading');
    this._store.dispatch(new GetReferralUsers());

    this.userSubscription = this._store.select('backoffice', 'user', 'referralHash')
      .subscribe((referralHash: string) => {
        this.referralLink = `${environment.domain}/?ref=${referralHash}`;
      });
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

  public ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

}
