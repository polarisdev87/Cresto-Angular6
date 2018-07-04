import { environment } from '../../../environments/environment';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { GetReferralUsers } from '../../store/actions/referrals-users.action';

@Component({
  selector: 'app-myreferrals',
  templateUrl: './myreferrals.component.html',
  styleUrls: ['./myreferrals.component.sass']
})
export class MyreferralsComponent implements OnInit, OnDestroy {
  public roundsReferralsUsers$: Observable<User[]>;
  public referralLink;
  public userSubscription: Subscription;
  loader$: Observable<boolean>;
  public referralUsersHeaders = [
    'S/N', 'Referral Username', 'Date Registered'
  ];

  public constructor(
    private _store: Store<StoreStates>
  ) {}

  public ngOnInit(): void {
    this.roundsReferralsUsers$ = this._store.select('referralUsers', 'data');
    this.loader$ = this._store.select('referralUsers', 'isLoading');
    this._store.dispatch(new GetReferralUsers());


    this.userSubscription = this._store.select('auth', 'user').subscribe((user: User) => {
      this.referralLink = `${environment.domain}/${user.referralHash}`;
    });
    this._store.dispatch(new GetReferralUsers());

  }

  public ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

}
