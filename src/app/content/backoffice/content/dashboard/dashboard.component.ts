import { filter } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { RoundsRequest } from './store/actions/rounds.actions';
import { IRootState } from '../../../../store/reducers';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  public rounds$: Observable<any>;
  public scroll;
  constructor(
    private _store: Store<IRootState>
  ) {
  }
  public dashboardTableHead = [
    'ICO Round', 'CSTT Supply', 'Price ($)', 'Minimum', 'Maximum', 'Free Tokens', 'Free Tokens Recipients', 'Status'
  ];
  public ngOnInit() {
    this.rounds$ = this._store.select('dashboard', 'rounds', 'data');

    this._store.select('backoffice', 'user', '_id')
      .pipe(
        filter((id: string | null) => Boolean(id))
      )
      .subscribe(() => {
        this._store.dispatch(new RoundsRequest());
      });
  }
}
