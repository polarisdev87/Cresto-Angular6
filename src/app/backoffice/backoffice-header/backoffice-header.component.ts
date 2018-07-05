import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/index';
import {Store} from '@ngrx/store';
import {getStateData} from '../../store/selectors/wallets.selector';

@Component({
  selector: 'app-backoffice-header',
  templateUrl: './backoffice-header.component.html',
  styleUrls: ['./backoffice-header.component.sass']
})
export class BackofficeHeaderComponent implements OnInit {
  logo = 'assets/images/backoffice-logo.png';
  @Input()
  wallets;
  currency;
  assets$: Observable<any>;
  wallets$: Observable<any>;

  constructor(private _store: Store<StoreStates>) {
  }

  ngOnInit() {
    this.assets$ = this._store.select('backoffice', 'assets', 'data');
    this.wallets$ = this._store.select(getStateData('wallets'));
  }

}
