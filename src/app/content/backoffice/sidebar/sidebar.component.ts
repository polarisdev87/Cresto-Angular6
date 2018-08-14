
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IRootState } from '../../../store/reducers';
import { Logout } from '../../../store/actions/auth.action';
import { HttpService } from '../../../http.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {
@Input()
public isOpen!: boolean;

  public user$!: Observable<User>;
  public assets$!: Observable<any>;
  public wallets$!: Observable<any>;

  public constructor(
    private _store: Store<IRootState>,
    private _http: HttpService
  ) {}

  public ngOnInit() {
    this.user$ = this._store.select('backoffice', 'user');
    this.assets$ = this._store.select('backoffice', 'assets', 'data');
    this.wallets$ = this._store.select('backoffice', 'wallets', 'data');
  }
  public logout() {
    this._http.authorizedRequest('/auth/signout', {}, 'GET').subscribe(() => {
      this._store.dispatch(new Logout());
    });
  }
}
