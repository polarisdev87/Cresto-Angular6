import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ASSETS_REQUEST, AssetsLoadFail, AssetsLoadSuccess } from '../actions/assets.actions';
import { WalletsService } from '../../../../shared/services/wallets.service';

@Injectable()
export class AssetsEffects {

  @Effect()
  public assetsWallets$: Observable<Action> = this.actions$
    .ofType(ASSETS_REQUEST).pipe(
      switchMap(() => this._walletsService.assets().pipe(
        map((data: any) => new AssetsLoadSuccess(data)),
        catchError((err: Error) => {
          // tslint:disable-next-line
          console.log(err);
          return of(new AssetsLoadFail(err));
        })
      )),
    );


  public constructor(
    private actions$: Actions,
    private _walletsService: WalletsService,
  ) {
  }
}
