import { environment } from '../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";

@Component({
  selector: 'app-myreferrals',
  templateUrl: './myreferrals.component.html',
  styleUrls: ['./myreferrals.component.css']
})
export class MyreferralsComponent implements OnInit {
  isLoaded = false;
  username;
  referrals = [];
  referalLink;

  constructor(
    private _store: Store<StoreStates>
  ) {
  }

  ngOnInit() {
    this._store.select('auth', 'user').subscribe((user: User) => {
      this.referalLink = `${environment.domain}/${user.referralHash}`;
    });
  }
}
