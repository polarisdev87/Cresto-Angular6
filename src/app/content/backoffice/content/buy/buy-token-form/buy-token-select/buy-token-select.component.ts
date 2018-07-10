import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
type Cb = (_: number) => void;
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
export class BuyTokenSelectComponent implements ControlValueAccessor {
  public currentCoin: number = 1;

  private _onChange!: Cb;

  public selectCoin(coin: number) {
    this.currentCoin = coin;
    this._onChange(coin);
  }

  public writeValue(coin: number): void {
    this.currentCoin = coin;
  }

  public registerOnChange(fn: Cb): void {
    this._onChange = fn;
  }

  public registerOnTouched(_fn: Cb): void {
  }
}
