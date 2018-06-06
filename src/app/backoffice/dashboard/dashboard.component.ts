import { getStateData } from './../../store/selectors/wallets.selector';
import { WalletRequest, RoundsRequest } from './../../store/actions/wallets.action';
import { filter } from 'rxjs/operators';
import { getAuthUserId } from './../../store/selectors/auth.selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  rounds$: Observable<any>;
  wallets$: Observable<any>;

  constructor(
    private _store: Store<StoreStates>
  ) { }

  ngOnInit() {
    this.rounds$ = this._store.select(getStateData('rounds'));
    this.wallets$ = this._store.select(getStateData('wallets'));

    this._store.select(getAuthUserId)
    .pipe(
      filter((id: string | null) => Boolean(id))
    )
    .subscribe((id) => {
      this._store.dispatch(new WalletRequest(id));
      this._store.dispatch(new RoundsRequest());
    });
  }
}
