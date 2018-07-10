import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/index';
import { Store } from '@ngrx/store';
import { IRootState } from '../../../store/reducers';
import { getAssets } from '../store/selectors/assets.selector';

@Component({
  selector: 'app-backoffice-header',
  templateUrl: './backoffice-header.component.html',
  styleUrls: ['./backoffice-header.component.sass']
})
export class BackofficeHeaderComponent implements OnInit {
  public logo = 'assets/images/backoffice-logo.png';
  public assets$!: Observable<any>;

  public constructor(
    private _store: Store<IRootState>,
  ) { }

  public ngOnInit() {
    this.assets$ = this._store.select(getAssets);
  }

}
