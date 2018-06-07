import { getAuthUserId } from './../../../store/selectors/auth.selectors';
import { CalculateSumRequest, BuyTokensRequest } from './../../../store/actions/buy-token.action';
import { Store } from '@ngrx/store';
import { of, Observable, combineLatest } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-buy-token-form',
  templateUrl: './buy-token-form.component.html',
  styleUrls: ['./buy-token-form.component.css']
})
export class BuyTokenFormComponent implements OnInit {
  // TODO select from store
  currencies = {
    1: 'BTC',
    3: 'ETH'
  };

  total$: Observable<number>;
  userId$: Observable<string>;
  tokenPrice$: Observable<number>;

  tokensform: FormGroup;
  constructor(
    private _store: Store<StoreStates>,
  ) { }

  ngOnInit() {
    this.tokenPrice$ = this._store.select('tokenPurchase').pipe(
      map((data: any) => data.price)
    );
    this.tokensform = new FormGroup({
      amount: new FormControl(0, [Validators.pattern('0123456789')]),
      currency: new FormControl(1, [Validators.required])
    });
    this.userId$ = this._store.select(getAuthUserId);

    combineLatest(
      this.userId$,
      this.tokensform.valueChanges.pipe(debounceTime(300)),
      (userId: string, data: { amount: number, currency: number }) => {
        const {amount, currency: quote_asset_id} = data;
        return {
          userId,
          quote_asset_id,
          amount
        };
      }
    ).subscribe((data: CalculateTokensSum) => {
      this._store.dispatch(new CalculateSumRequest(data));
    });
  }


  buy() {
    combineLatest(
      this.userId$,
      of(this.tokensform.value),
      (userId: string, data: { amount: number, currency: number }) => {
        const {amount, currency: quote_asset_id} = data;
        return {
          userId,
          quote_asset_id,
          amount
        };
      }
    ).subscribe((data: CalculateTokensSum) => {
      this._store.dispatch(new BuyTokensRequest(data));
    });
  }
}
