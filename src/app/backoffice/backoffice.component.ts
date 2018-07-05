import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {GetCurrentUser} from '../store/actions';
import {AclRequest} from './store/actions/acl.actions';
import {AssetsRequest} from './store/actions/assets.actions';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.sass']
})
export class BackofficeComponent implements OnInit {

  constructor(
    private _store: Store<StoreStates>
  ) {
  }

  ngOnInit() {
    this._store.dispatch(new GetCurrentUser());
    this._store.dispatch(new AclRequest());
    this._store.dispatch(new AssetsRequest());
  }
}
