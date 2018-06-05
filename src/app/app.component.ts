import { AclRequest } from './store/actions/acl.actions';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private _store: Store<StoreStates>
  ) { }

  ngOnInit() {
    this._store.dispatch(new AclRequest());
  }

}
