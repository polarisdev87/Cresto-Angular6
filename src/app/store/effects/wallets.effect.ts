import {
  BUY_TOKENS_REQUEST,
  BuyTokensFail,
  BuyTokensRequest,
  BuyTokensSuccess,
  CALCULATE_SUMM_REQUEST,
  CalculateSumFail,
  CalculateSumRequest,
  CalculateSumSuccess
} from './../actions/buy-token.action';
import {WalletsService} from './../../shared/services/wallets.service';
import {
  GENERATE_WALLET_ADDRESS_REQUEST,
  GenerateWalletAddressFail,
  GenerateWalletAddressRequest,
  GenerateWalletAddressSuccess,
  ROUNDS_REQUEST,
  RoundsLoadFail,
  RoundsLoadSuccess,
  TRANSACTION_REQUEST,
  TransactionLoadFail,
  TransactionLoadSuccess,
  TransactionRequest,
  WALLET_REQUEST,
  WalletLoadFail,
  WalletLoadSuccess,
  WalletRequest
} from './../actions/wallets.action';
import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {MatDialog} from '@angular/material';
import {PopupComponent} from '../../backoffice/content/buy/popup/popup.component';

@Injectable()
export class WalletsEffects {

  @Effect()
  public loadWallets$: Observable<Action> = this.actions$
    .ofType(WALLET_REQUEST).pipe(
      map((action: WalletRequest) => action.payload),
      switchMap((userId: string) => this._walletsService.getUserWallets(userId).pipe(
        map((data: any) => new WalletLoadSuccess(data)),
        catchError((err: Error) => {
          // tslint:disable-next-line
          console.log(err);
          return of(new WalletLoadFail(err));
        })
      )),
    );

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

  @Effect()
  public transactionWallets$: Observable<Action> = this.actions$
    .ofType(TRANSACTION_REQUEST).pipe(
      map((action: TransactionRequest) => action.payload),
      switchMap((userId: string) => this._walletsService.transaction(userId).pipe(
        map((data: any) => new TransactionLoadSuccess(data)),
        catchError((err: Error) => {
          // tslint:disable-next-line
          console.log(err);
          return of(new TransactionLoadFail(err));
        })
      )),
    );

  @Effect()
  public calculateToken$: Observable<Action> = this.actions$
    .ofType(CALCULATE_SUMM_REQUEST).pipe(
      map((action: CalculateSumRequest) => action.payload),
      switchMap((data: CalculateTokensSum) => this._walletsService.calculateTokens(data).pipe(
        map((res: TokenPrice) => new CalculateSumSuccess(res.price)),
        catchError((err: Error) => {
          // tslint:disable-next-line
          console.log(err);
          return of(new CalculateSumFail(err));
        })
      )),
    );

  @Effect()
  public buyTokens$: Observable<Action> = this.actions$
    .ofType(BUY_TOKENS_REQUEST).pipe(
      map((action: BuyTokensRequest) => action.payload),
      switchMap((data: CalculateTokensSum) => this._walletsService.buyTokens(data).pipe(
        map((res: any) => new BuyTokensSuccess(res)),
        tap(() => alert('Success')),
        catchError((err: Error) => {
          this._dialog.open(PopupComponent, {
            data: {
              message: err
            }
          });
          // tslint:disable-next-line
          console.log(err);
          return of(new BuyTokensFail(err));
        })
      )),
    );

  @Effect()
  public generateWalletAddress$: Observable<Action> = this.actions$
    .ofType(GENERATE_WALLET_ADDRESS_REQUEST).pipe(
      map((action: GenerateWalletAddressRequest) => action.payload),
      switchMap((data: GenerateWalletAddress) => this._walletsService.generateWalletAddress(data).pipe(
        map((res: { address: string }) => new GenerateWalletAddressSuccess({...data, ...res})),
        catchError((err: Error) => {
          // tslint:disable-next-line
          console.log(err);
          return of(new GenerateWalletAddressFail(err));
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
