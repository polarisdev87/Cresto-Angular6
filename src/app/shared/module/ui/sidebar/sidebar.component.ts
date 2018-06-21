import { getAuthUser } from '../../../../store/selectors';
import { Observable } from 'rxjs';
import { AclRequest } from '../../../../store/actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Logout } from '../../../../store/actions';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {
  user$: Observable<User | {}>;

  constructor(private _store: Store<any>) {
  }

  ngOnInit() {
    this.user$ = this._store.select(getAuthUser);
    this._store.dispatch(new AclRequest());
  }

  logout() {
    this._store.dispatch(new Logout());
  }
}
