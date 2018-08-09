import { Store } from '@ngrx/store';
import { combineLatest, Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, map, tap } from 'rxjs/operators';
import { BuyTokensRequest, CalculateSumRequest } from '../store/actions/buy-tokens.action';
import { IRootState } from '../../../../../store/reducers';
import { LocalStorageService } from '../../../../../shared/services/localStorage.service';

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

  // Equivalet number of CSTT tokens with BTC/ETH balance
  public tokenEquivalents = {
    1: 0,
    3: 0
  };

  public isActive = false;
  public buttonStateBuy = {
    name: 'Buy Now',
    class: 'redBig'
  };

  // total$: Observable<number>;
  public userId$!: Observable<string>;
  public tokenPrice$!: Observable<number>;
  public tokenPriceUSD$!: Observable<number>;
  public transId: string = '';  // AffiliChain id per user
  public clickId: string = ''; // Biggico id per user
  public firstPurchase$!: Observable<boolean>;


  public tokensform = new FormGroup({
    amount: new FormControl('', [Validators.pattern('0123456789')]),
    currency: new FormControl(1, [Validators.required])
  });

  public constructor(
    private _store: Store<IRootState>,
    private _localStorageService: LocalStorageService
  ) {
  }

  public ngOnInit() {

    // Get ids for pixels if available
    this.transId = this._localStorageService.getItem('transId');
    this.clickId = this._localStorageService.getItem('clickId');

    this._store.select('backoffice', 'wallets').subscribe((walletsData: any) => {
      this.tokenEquivalents[1] = walletsData.data[0] ? Math.floor(walletsData.data[0].cstt_equivalent) : 0;
      this.tokenEquivalents[3] = walletsData.data[1] ? Math.floor(walletsData.data[1].cstt_equivalent) : 0;
    });
    this.tokenPrice$ = this._store.select('buy', 'tokenPurchase').pipe(
      map((data: any) => data.price),
      tap((price: number) => {
        const CURRENCY = this.currencies[this.tokensform.value.currency];
        this._localStorageService.setItem('buy_currency', CURRENCY.toLowerCase());
        this._localStorageService.setItem('buy_price', price);
      })
    );
    this.tokenPriceUSD$ = this._store.select('buy', 'tokenPurchase').pipe(
      map((data: any) => data.price_usd)
    );

    this.userId$ = this._store.select('backoffice', 'user', '_id');
    this.firstPurchase$ = this._store.select('buy', 'tokenPurchase').pipe(
      map((data: any) => data.firstPurchase)
    );

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

  public selectAll() {
    const csttEquivalent = this.tokenEquivalents[this.tokensform.value.currency];
    this.tokensform.patchValue({amount: csttEquivalent});
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
