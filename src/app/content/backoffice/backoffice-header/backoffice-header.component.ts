import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs/index';
import { Store } from '@ngrx/store';
import { IRootState } from '../../../store/reducers';
import { getAssets } from '../store/selectors/assets.selector';
import { Logout } from '../../../store/actions/auth.action';
import { HttpService } from '../../../http.service';

@Component({
  selector: 'app-backoffice-header',
  templateUrl: './backoffice-header.component.html',
  styleUrls: ['./backoffice-header.component.sass']
})
export class BackofficeHeaderComponent implements OnInit {
  public logo = 'assets/images/backoffice-logo.png';
  public user$!: Observable<User>;
  public assets$!: Observable<any>;

  @Output() public onOpen: EventEmitter<any> = new EventEmitter();
  public constructor(
    private _store: Store<IRootState>,
    private _http: HttpService
  ) { }

  public dropDownSidebar() {
    this.onOpen.emit();
  }
  public ngOnInit() {
    this.user$ = this._store.select('backoffice', 'user');
    this.assets$ = this._store.select(getAssets);
  }

  public logout() {
    this._http.authorizedRequest('/auth/signout', {}, 'GET').subscribe(() => {
      this._store.dispatch(new Logout());
    });
  }
}
