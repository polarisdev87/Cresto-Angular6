import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/index';
import { Store } from '@ngrx/store';
import { IRootState } from '../../../store/reducers';

@Component({
  selector: 'app-backoffice-header',
  templateUrl: './backoffice-header.component.html',
  styleUrls: ['./backoffice-header.component.sass']
})
export class BackofficeHeaderComponent implements OnInit {
  logo = 'assets/images/backoffice-logo.png';
  assets$: Observable<any>;

  constructor(
    private _store: Store<IRootState>,
  ) { }

  ngOnInit() {
    this.assets$ = this._store.select('backoffice', 'assets', 'data');
  }

}
