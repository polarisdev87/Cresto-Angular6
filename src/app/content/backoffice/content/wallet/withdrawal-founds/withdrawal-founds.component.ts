import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { catchError, debounceTime, switchMap } from 'rxjs/operators';
import { TwoFactorService } from './../../../../../shared/services/twofactor.service';
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
  @Input()
  public coin!: WalletData;
  @Output()
  public onClose = new EventEmitter();
  public set coinValue(coin: WalletData) {
    const amountField: FormControl = this.withdrawalForm && this.withdrawalForm.get('amount') as FormControl;
    if (coin && amountField) {
      this.coin = coin;
      // tslint:disable-next-line:variable-name
      const { id: wallet_id } = this.coin;
      this._store.dispatch(new CalculateWithdrawalFeeRequest({ amount: amountField.value, wallet_id }));
    }
  }

  public buttonStateBuy = { name: 'Confirm', class: '' };
  public withdrawalForm: FormGroup = this._fb.group({
    address: ['', Validators.required],
    amount: [1, [Validators.required, Validators.min(0)]],
    tfaCode: ['', Validators.required]
  });
  public withdrawalData$!: Observable<WithdrawalRes>;
  public error$!: Observable<string>;
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
    this.onClose.emit();
    const { address, amount, tfaCode } = this.withdrawalForm.value;
    // tslint:disable-next-line:variable-name
    const { id: wallet_id } = this.coin;
    this._store.dispatch(new WithdrawalRequest({ wallet_id, address, amount, tfaCode }));
  }

  public ngOnDestroy() {
    this._store.dispatch(new ClearWithdrawal());
  }

  public _checkTfaCode({value: tfaCode }: FormControl) {
    return this._tfaService.checkTfaCode({ tfaCode }).pipe(
      debounceTime(300),
      switchMap(() => {
        return of(null);
      }),
      catchError(() => {
        return of({ invalidCode: true });
      })
    );
  }

}
