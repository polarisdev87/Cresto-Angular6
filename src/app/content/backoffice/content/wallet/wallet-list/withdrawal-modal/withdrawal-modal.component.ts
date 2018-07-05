import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { WalletService } from '../../wallet.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import { IRootState } from '../../../../../../store/reducers';
import { ClearWithdrawal, WithdrawalRequest, CalculateWithdrawalFeeRequest } from '../../store/actions/withdrawal.action';

@Component({
  selector: 'app-withdrawal-modal',
  templateUrl: './withdrawal-modal.component.html',
  styleUrls: ['./withdrawal-modal.component.css']
})
export class WithdrawalModalComponent implements OnInit, OnDestroy {
  userId$: Observable<string>;
  withdrawalForm: FormGroup;
  withdrawalData: WithdrawalRes;
  error$: Observable<string>;

  constructor(
    private _fb: FormBuilder,
    private _store: Store<IRootState>,
    private _walletService: WalletService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit() {
    this._store.select('walletList', 'withdrawal', 'data').subscribe((data: WithdrawalRes) => this.withdrawalData = data);
    this.error$ = this._store.select('walletList', 'withdrawal', 'error');

    this.withdrawalForm = this._fb.group({
      cstt_address: ['', Validators.required],
      amount: [0, Validators.required]
    });

    this.userId$ = this._store.select('backoffice', 'user', '_id');
    const amount$ = this.withdrawalForm.controls['amount'].valueChanges;

    this._walletService.calculateWithdrawalData(this.userId$, amount$)
      .subscribe((data: CalculateFee) => {
        const { wallet_id } = this.data;
        this._store.dispatch(new CalculateWithdrawalFeeRequest({ ...data, wallet_id }));
      });
  }

  withdrawal() {
    this._walletService.withdrawal(this.userId$, of(this.withdrawalForm.value))
      .subscribe((data: WithdrawalBody) => this._store.dispatch(new WithdrawalRequest(data)));
  }

  ngOnDestroy() {
    this._store.dispatch(new ClearWithdrawal());
  }
}
