import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ROUNDS_REQUEST, RoundsLoadFail, RoundsLoadSuccess } from '../actions/rounds.actions';
import { WalletsService } from '../../../../../../shared/services/wallets.service';

@Injectable()
export class RoundsEffects {

  @Effect()
  public roundsWallets$: Observable<Action> = this.actions$
    .ofType(ROUNDS_REQUEST).pipe(
      switchMap(() => this._walletsService.rounds().pipe(
        map((data: any) => new RoundsLoadSuccess(data)),
        catchError((err: Error) => {
          // tslint:disable-next-line
          console.log(err);
          return of(new RoundsLoadFail(err));
        })
      )),
    );

  public constructor(
    private actions$: Actions,
    private _walletsService: WalletsService,
  ) {
  }
}
