import { switchMap, debounceTime, catchError } from 'rxjs/operators';
import { TwoFactorService } from './../../../../../shared/services/twofactor.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { CalculateWithdrawalFeeRequest, ClearWithdrawal, WithdrawalRequest } from '../store/actions/withdrawal.action';

class StoreStates {
}

@Component({
  selector: 'app-withdrawal-founds',
  templateUrl: './withdrawal-founds.component.html',
  styleUrls: ['./withdrawal-founds.component.sass']
})
export class WithdrawalFoundsComponent implements OnInit {
  @Input('coin')
  public set coinValue(coin: WalletData) {
    const amountField: FormControl = this.withdrawalForm && this.withdrawalForm.get('amount') as FormControl;
    if (coin && amountField) {
      this.coin = coin;
      // tslint:disable-next-line:variable-name
      const { id: wallet_id } = this.coin;
      this._store.dispatch(new CalculateWithdrawalFeeRequest({ amount: amountField.value, wallet_id }));
    }
  }

  public buttonStateBuy = { name: 'Send', class: 'redBig' };
  public withdrawalForm: FormGroup = this._fb.group({
    cstt_address: ['', Validators.required],
    amount: [1, [Validators.required, Validators.min(0)]],
    tfaCode: ['', Validators.required, this._checkTfaCode.bind(this)]
  });
  public withdrawalData$!: Observable<WithdrawalRes>;
  public error$!: Observable<string>;

  public coin!: WalletData;

  public constructor(
    private _fb: FormBuilder,
    private _store: Store<StoreStates>,
    private _tfaService: TwoFactorService,
  ) { }

  public ngOnInit() {
    this.withdrawalData$ = this._store.select('walletList', 'withdrawal', 'data');
    this.error$ = this._store.select('walletList', 'withdrawal', 'error');
    const amount$ = this.withdrawalForm.controls['amount'].valueChanges;

    amount$.subscribe((amount: number) => {
      // tslint:disable-next-line:variable-name
      const { id: wallet_id } = this.coin;
      this._store.dispatch(new CalculateWithdrawalFeeRequest({ amount, wallet_id }));
    });
  }

  public withdrawal() {
    const { cstt_address, amount } = this.withdrawalForm.value;
    this._store.dispatch(new WithdrawalRequest({ cstt_address, amount }));
  }

  public ngOnDestroy() {
    this._store.dispatch(new ClearWithdrawal());
  }

  public _checkTfaCode({value: tfaCode }: FormControl) {
    return this._tfaService.checkTfaCode({ tfaCode }).pipe(
      debounceTime(300),
      switchMap((data: any) => {
        console.log(data);
        return of(null);
      }),
      catchError((err: Error) => {
        console.log(err);
        return of({ invalidCode: true });
      })
    );
  }

}
