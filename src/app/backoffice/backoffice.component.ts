import { AclRequest } from '../store/actions';
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

    const el1 = document.createElement('script');
    const el2 = document.createElement('script');

    el1.src = 'assets/js/jquery.bundle.js';
    el1.onload = () => {
      el2.src = 'assets/js/scroll-table.js';
      document.body.appendChild(el2);
    };
    document.body.appendChild(el1);
  }



}
