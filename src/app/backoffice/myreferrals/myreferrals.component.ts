import { environment } from '../../../environments/environment';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

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
  public constructor(
    private _store: Store<StoreStates>
  ) {
  }

  public ngOnInit(): void {
    this.userSubscription = this._store.select('auth', 'user').subscribe((user: User) => {
      this.referralLink = `${environment.domain}/${user.referralHash}`;
    });
  }

  public ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
