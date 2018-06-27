import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'app-buy-token-select',
  templateUrl: './buy-token-select.component.html',
  styleUrls: ['./buy-token-select.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=>BuyTokenSelectComponent),
      multi:true
    }
  ]
})
export class BuyTokenSelectComponent implements  ControlValueAccessor {

  private _onChange;
  private _onTouched;

  public currentCoin: number = 1;

  public selectCoin(coin:number){
    this.currentCoin = coin;
    this._onChange(coin)
  }

  public   writeValue(coin: number): void {
    this.currentCoin = coin;
  }

  public registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }
}
