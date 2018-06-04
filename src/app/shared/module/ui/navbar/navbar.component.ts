import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Logout } from '../../../../store/actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _store: Store<any>) { }

  ngOnInit() {
  }

  logout() {
    this._store.dispatch(new Logout());
  }
}
