import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AclRequest } from './store/actions/acl.actions';
import { AssetsRequest } from './store/actions/assets.actions';
import { IRootState } from '../../store/reducers';
import { filter } from 'rxjs/operators';
import { WalletRequest } from './store/actions/wallets.action';
import { GetCurrentUser } from './store/actions/user.actions';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.sass']
})
export class BackofficeComponent implements OnInit {

  public constructor(
    private _store: Store<IRootState>
  ) {
  }

  public ngOnInit() {
    this._store.dispatch(new GetCurrentUser());
    this._store.dispatch(new AclRequest());
    this._store.dispatch(new AssetsRequest());
    this._store.select('backoffice', 'user', '_id')
      .pipe(
        filter((id: string | null) => Boolean(id))
      )
      .subscribe((id) => {
        this._store.dispatch(new WalletRequest(id));
      });
  }
}
