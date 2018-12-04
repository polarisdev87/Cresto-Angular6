import { Component, forwardRef, OnInit, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs';
import { IRootState } from '../../../../../../store/reducers';
import { Store } from '@ngrx/store';
import { getWalletsDatas } from '../../../../store/selectors/assets.selector';

type Cb = (_: number) => void;

@Component({
  selector: 'app-buy-token-select',
  templateUrl: './buy-token-select.component.html',
  styleUrls: ['./buy-token-select.component.sass'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BuyTokenSelectComponent),
      multi: true
    }
  ]
})
export class BuyTokenSelectComponent implements ControlValueAccessor, OnInit {
  public currentCoin: number = 1;
  public currentCoinObj;
  public wallets$!: Observable<WalletData[]>;

  private _onChange!: Cb;


  public constructor(
    private _store: Store<IRootState>
  ) {
  }

  public ngOnInit() {
    this.wallets$ = this._store.select(getWalletsDatas);
    this.wallets$.subscribe((wallets) => {
      wallets.forEach((wallet: any) => {
        if (wallet.asset.id === this.currentCoin) {
          this.currentCoinObj = wallet;
          return;
        }
      });
    });
  }


  public selectCoin($event) {
    this.currentCoin = $event.asset.id;
    this._onChange(this.currentCoin);
  }

  public writeValue(coin: number): void {
    this.currentCoin = coin;
  }

  public registerOnChange(fn: Cb): void {
    this._onChange = fn;
  }

  public registerOnTouched(_fn: any): void {
  }

}
