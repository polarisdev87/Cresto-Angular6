import { getStateData } from '../../store/selectors/wallets.selector';
import { RoundsRequest } from '../../store/actions/wallets.action';
import { filter } from 'rxjs/operators';
import { getAuthUserId } from '../../store/selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  rounds$: Observable<any>;
  constructor(
    private _store: Store<StoreStates>
  ) {
  }
  public dashboardTableHead = [
    'ICO Round', 'CSTT Supply', 'Price ($)', 'Minimum', 'Maximum', 'Free Tokens', 'Free Tokens Recipients', 'Status'
  ];
  ngOnInit() {
    this.rounds$ = this._store.select(getStateData('rounds'));
    this._store.select(getAuthUserId)
      .pipe(
        filter((id: string | null) => Boolean(id))
      )
      .subscribe((id) => {
        this._store.dispatch(new RoundsRequest());
      });
  }
}
