import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from "rxjs/Rx";
import {Store} from "@ngrx/store";
import {WalletService} from "../wallet.service";
import {CalculateWithdrawalFeeRequest, ClearWithdrawal, WithdrawalRequest} from "../store/actions/withdrawal.action";
import {of} from "rxjs";

class StoreStates {
}

@Component({
  selector: 'app-withdrawal-founds',
  templateUrl: './withdrawal-founds.component.html',
  styleUrls: ['./withdrawal-founds.component.sass']
})
export class WithdrawalFoundsComponent implements OnInit {
  @Input() public coin;


  public buttonStateBuy = {
    name: 'Send',
    class: 'redBig'
  };

  userId$!: Observable<string>;
  withdrawalForm!: FormGroup;
  withdrawalData$!: Observable<WithdrawalRes>;
  error$!: Observable<string>;

  public constructor(
    private _fb: FormBuilder,
    private _store: Store<StoreStates>,
    private _walletService: WalletService,
  ) {
  }

  public ngOnInit() {
    this.withdrawalData$ = this._store.select('backoffice', 'wallet', 'withdrawal', 'data');
    // this._store.select(getStateData('withdrawal')).subscribe((data: WithdrawalRes) => this.withdrawalData = data);

    this.error$ = this._store.select('backoffice', 'wallet', 'withdrawal', 'error');

    this.withdrawalForm = this._fb.group({
      cstt_address: ['', Validators.required],
      amount: [0, Validators.required]
    });

    // this.userId$ = this._store.select(getAuthUserId);
    const amount$ = this.withdrawalForm.controls['amount'].valueChanges;

    amount$
      .subscribe((data: CalculateFee) => {
        const { wallet_id } = this.data;
        this._store.dispatch(new CalculateWithdrawalFeeRequest({...data, wallet_id }));
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
