import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IRootState } from '../../../../../../store/reducers';
import { getAssets } from '../../../../store/selectors/assets.selector';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.sass']
})
export class AssetsComponent implements OnInit {

  public assets$!: Observable<any>;
  public constructor(
    private _store: Store<IRootState>
  ) { }

  public ngOnInit() {
    this.assets$ = this._store.select(getAssets);
  }

}
