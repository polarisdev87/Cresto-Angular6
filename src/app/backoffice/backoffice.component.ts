import { AclRequest } from './../store/actions/acl.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetCurrentUser } from '../store/actions';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.sass']
})
export class BackofficeComponent implements OnInit {

  constructor(
    private _store: Store<StoreStates>
  ) { }

  ngOnInit() {
    this._store.dispatch(new GetCurrentUser());
    this._store.dispatch(new AclRequest());
  }
}
