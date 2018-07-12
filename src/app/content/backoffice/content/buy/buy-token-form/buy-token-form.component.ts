import { Store } from '@ngrx/store';
import { combineLatest, Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, map } from 'rxjs/operators';
import { BuyTokensRequest, CalculateSumRequest } from '../store/actions/buy-tokens.action';
import { IRootState } from '../../../../../store/reducers';

@Component({
  selector: 'app-buy-token-form',
  templateUrl: './buy-token-form.component.html',
  styleUrls: ['./buy-token-form.component.sass']
})
export class BuyTokenFormComponent implements OnInit {
  // TODO select from store
  public currencies = {
    1: 'BTC',
    3: 'ETH'
  };

  public isActive = false;
  public buttonStateBuy = {
    name: 'Click To Purchase',
    class: 'redBig'
  };

  // total$: Observable<number>;
  public userId$!: Observable<string>;
  public tokenPrice$!: Observable<number>;

  public tokensform = new FormGroup({
    amount: new FormControl('', [Validators.pattern('0123456789')]),
    currency: new FormControl(1, [Validators.required])
  });

  public constructor(
    private _store: Store<IRootState>,
  ) {
  }

  public ngOnInit() {
    this.tokenPrice$ = this._store.select('buy', 'tokenPurchase').pipe(
      map((data: any) => data.price)
    );
    this.userId$ = this._store.select('backoffice', 'user', '_id');

    combineLatest(
      this.userId$,
      this.tokensform.valueChanges.pipe(
        debounceTime(300),
        // filter(( data: { amount: number, currency: number }) => Boolean(data.amount > 0 ))
      ),
      (userId: string, data: { amount: number, currency: number }) => {
        const { amount, currency: quoteAssetId } = data;
        return {
          userId,
          quote_asset_id: quoteAssetId,
          amount
        };
      }
    ).subscribe((data: CalculateTokensSum) => {
      this._store.dispatch(new CalculateSumRequest(data));
    });
  }

  public buy() {
    combineLatest(
      this.userId$,
      of(this.tokensform.value),
      (userId: string, data: { amount: number, currency: number }) => {
        const { amount, currency: quoteAssetId } = data;
        return {
          userId,
          quote_asset_id: quoteAssetId,
          amount
        };
      }
    ).subscribe((data: CalculateTokensSum) => {
      this._store.dispatch(new BuyTokensRequest(data));
    });
  }

  public toggleClass() {
    this.isActive = !this.isActive;
  }
}