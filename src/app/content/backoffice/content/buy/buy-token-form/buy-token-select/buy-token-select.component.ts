import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import { Observable } from 'rxjs';
import {IRootState} from '../../../../../../store/reducers';
import {Store} from '@ngrx/store';
import {getWalletsDatas} from '../../../../store/selectors/assets.selector';


@Component({
  selector: 'app-buy-token-select',
  templateUrl: './buy-token-select.component.html',
  styleUrls: ['./buy-token-select.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BuyTokenSelectComponent),
      multi: true
    }
  ]
})
export class BuyTokenSelectComponent implements ControlValueAccessor, OnInit {

  wallets$: Observable<WalletData[]>;


  private _onChange;
  private _onTouched;

  public currentCoin = 1;
  public coinCur = 1;

  constructor(
    private _store: Store<IRootState>
  ) {
  }

  ngOnInit() {
    this.wallets$ = this._store.select(getWalletsDatas);
  }


  public selectCoin(coin: number) {
    this.currentCoin = coin;
    this._onChange(coin);
  }

  public writeValue(coin: number): void {
    this.currentCoin = coin;
  }

  public registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

}
