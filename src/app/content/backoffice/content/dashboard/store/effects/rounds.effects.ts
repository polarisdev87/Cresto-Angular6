import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {MatDialog} from '@angular/material';
import { ROUNDS_REQUEST, RoundsLoadSuccess, RoundsLoadFail } from '../actions/rounds.actions';
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
    private _dialog: MatDialog,
  ) {
  }
}
