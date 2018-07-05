import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AclRequest } from './store/actions/acl.actions';
import { AssetsRequest } from './store/actions/assets.actions';
import { IRootState } from '../../store/reducers';
import { GetCurrentUser } from '../../store/actions/auth.action';
import {filter} from 'rxjs/operators';
import {getAuthUserId} from '../../store/selectors/auth.selectors';
import {WalletRequest} from './store/actions/wallets.action';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.sass']
})
export class BackofficeComponent implements OnInit {

  constructor(
    private _store: Store<IRootState>
  ) {
  }

  ngOnInit() {
    this._store.dispatch(new GetCurrentUser());
    this._store.dispatch(new AclRequest());
    this._store.dispatch(new AssetsRequest());
    this._store.select(getAuthUserId)
      .pipe(
        filter((id: string | null) => Boolean(id))
      )
      .subscribe((id) => {
        this._store.dispatch(new WalletRequest(id));
      });
  }
}
