
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IRootState } from '../../../store/reducers';
import { getAuthUser } from '../../../store/selectors/auth.selectors';
import { Logout } from '../../../store/actions/auth.action';

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

  constructor(private _store: Store<IRootState>) {
  }

  ngOnInit() {
    this.user$ = this._store.select(getAuthUser);
    this._store.select('backoffice', 'wallets', 'data').subscribe((a)=>{
      console.log(a)
    })
    this.assets$ = this._store.select('backoffice', 'assets', 'data');
    this.wallets$ = this._store.select('backoffice', 'wallets', 'data');
  }

  logout() {
    this._store.dispatch(new Logout());
  }
}
