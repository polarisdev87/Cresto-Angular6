import { getAuthUser } from './../../../../store/selectors/auth.selectors';
import { Observable } from 'rxjs';
import { AclRequest } from './../../../../store/actions/acl.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Logout } from '../../../../store/actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user$: Observable<User | {}>;

  constructor(private _store: Store<any>) { }

  ngOnInit() {
    this.user$ = this._store.select(getAuthUser);
    this._store.dispatch(new AclRequest());
  }

  logout() {
    this._store.dispatch(new Logout());
  }
}
