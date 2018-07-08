
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IRootState } from '../../../store/reducers';
import { Logout } from '../../../store/actions/auth.action';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {
  user$: Observable<User>;
  assets$: Observable<any>;
  wallets$: Observable<any>;

  constructor(
    private _store: Store<IRootState>
  ) {}

  ngOnInit() {
    this.user$ = this._store.select('backoffice', 'user');
    this.assets$ = this._store.select('backoffice', 'assets', 'data');
    this.wallets$ = this._store.select('backoffice', 'wallets', 'data');
  }

  logout() {
    this._store.dispatch(new Logout());
  }
}
