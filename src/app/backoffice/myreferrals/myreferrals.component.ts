import { environment } from '../../../environments/environment';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { getStateData } from "../../store/selectors/wallets.selector";
import { Observable } from "rxjs/Rx";
import { GetReferralUsers } from "../../store/actions/referrals-users.action";

@Component({
  selector: 'app-myreferrals',
  templateUrl: './myreferrals.component.html',
  styleUrls: ['./myreferrals.component.css']
})
export class MyreferralsComponent implements OnInit, OnDestroy {
  public isLoaded = false;
  public username;
  public referrals = [];
  public referralLink;
  public userSubscription: Subscription;
  referralsUsers$: Observable<any>;
  public constructor(private _store: Store<StoreStates>) {}

  public ngOnInit(): void {
    this.userSubscription = this._store.select('auth', 'user').subscribe((user: User) => {
      this.referralLink = `${environment.domain}/${user.referralHash}`;
    });
    this.referralsUsers$ = this._store.select(getStateData('referralUsers'));
    this._store.dispatch(new GetReferralUsers());
  }

  public ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
