import {
  PURCHASE_REQUEST,
  PurchaseFail,
  PurchaseRequest,
  PurchaseSuccess
} from './../actions/purchase.action';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { WalletsService } from '../../../../../../shared/services/wallets.service';

@Injectable()
export class PurchaseEffects {

  @Effect()
    public loadPurchase$: Observable<Action> = this.actions$
    .ofType(PURCHASE_REQUEST).pipe(
      map((action: PurchaseRequest) => action.payload),
      switchMap((userId: string) => this._walletsService.getPurchaseData(userId).pipe(
        map((data: any) => new PurchaseSuccess(data)),
        catchError((err: Error) => {
          // tslint:disable-next-line
          console.log(err);
          return of(new PurchaseFail(err));
        })
      )),
    );


  public constructor(
    private actions$: Actions,
    private _walletsService: WalletsService,
  ) {
  }
}
