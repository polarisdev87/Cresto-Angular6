import { TwoFactorState } from './../store/reducers/twofactor.reducer';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { IRootState } from '../../../../../store/reducers';
import { TwoFactorSetup, DeleteTwoFactor, VerifyTwoFactor } from '../store/actions/twofactor.actions';
import { skip } from 'rxjs/operators';

@Component({
  selector: 'app-two-factor-auth',
  templateUrl: './two-factor-auth.component.html',
  styleUrls: ['./two-factor-auth.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class TwoFactorAuthComponent implements OnInit {
  tfaData$: Observable<TwoFactorState['tfaData']>;
  twofactorState = 'def';
  disableTfaForm: FormGroup;
  enableTfaCode: FormControl = new FormControl('', Validators.required);
  isLoading$: Observable<boolean>;

  constructor(
    private _fb: FormBuilder,
    private _store: Store<IRootState>,
  ) {
    this.disableTfaForm = this._fb.group({
      password: ['', Validators.required],
      token: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.isLoading$ = this._store.select('settings', 'tfa', 'isLoading');
    this.tfaData$ = this._store.select('settings', 'tfa', 'tfaData');
    this._store.select('backoffice', 'user', 'twofactorEnabled').pipe(
      skip(1)
    ).subscribe((enabled: boolean) => {
      if (enabled) {
        this.twofactorState = 'desableAuthenticatorSupport';
        return;
      }
      this.twofactorState = 'def';
    });
  }

  changeTfaState(value: string) {
    this.twofactorState = value;
  }

  enableTfaSetup() {
    this.changeTfaState('enableAuthenticatorSupport');
    this._store.dispatch(new TwoFactorSetup());
  }

  enableTfa() {
    this._store.dispatch(new VerifyTwoFactor({ token: this.enableTfaCode.value}));
    this.enableTfaCode.reset();
  }

  disableTfa() {
    this._store.dispatch(new DeleteTwoFactor({...this.disableTfaForm.value}));
    this.disableTfaForm.reset();
  }

}
