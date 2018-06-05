import { AclRequest } from './../store/actions/acl.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetCurrentUser } from '../store/actions';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.css']
})
export class BackofficeComponent implements OnInit {

  constructor(
    private _store: Store<StoreStates>
  ) { }

  ngOnInit() {
    console.log('dispa');

    this._store.dispatch(new GetCurrentUser());
  }

}
