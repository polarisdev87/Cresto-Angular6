import { getAuthUser } from '../../store/selectors';
import { Observable } from 'rxjs';
import { AclRequest } from '../../store/actions';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Logout } from '../../store/actions';
import { getStateData } from '../../store/selectors/wallets.selector';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {
  @Input()
  wallets;
  currency;

  user$: Observable<User | {}>;
  assets$: Observable<any>;
  wallets$: Observable<any>;

  constructor(private _store: Store<StoreStates>) {
  }

  ngOnInit() {
    this.user$ = this._store.select(getAuthUser);
    this._store.dispatch(new AclRequest());
    this.assets$ = this._store.select(getStateData('assets'));
    this.wallets$ = this._store.select(getStateData('wallets'));
  }

  logout() {
    this._store.dispatch(new Logout());
  }
}
