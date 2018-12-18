import { ITwoFactorState } from './../store/reducers/twofactor.reducer';
import { Observable } from 'rxjs/Observable';
import { MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IRootState } from '../../../../../store/reducers';
import { DeleteTwoFactor, TwoFactorSetup, VerifyTwoFactor } from '../store/actions/twofactor.actions';
import { PopupComponent } from '../../buy/popup/popup.component';

@Component({
  selector: 'app-two-factor-auth',
  templateUrl: './two-factor-auth.component.html',
  styleUrls: ['./two-factor-auth.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class TwoFactorAuthComponent implements OnInit {
  public tfaData$!: Observable<ITwoFactorState['tfaData']>;
  public twofactorState = 'def';
  public disableTfaForm!: FormGroup;
  public enableTfaCode: FormControl = new FormControl('', Validators.required);
  public isLoading$!: Observable<boolean>;

  public constructor(
    private _fb: FormBuilder,
    private _store: Store<IRootState>,
    private _dialog: MatDialog
  ) {
    this.disableTfaForm = this._fb.group({
      password: ['', Validators.required],
      token: ['', Validators.required]
    });
  }

  public ngOnInit() {
    this.isLoading$ = this._store.select('settings', 'tfa', 'isLoading');
    this.tfaData$ = this._store.select('settings', 'tfa', 'tfaData');
    this._store.select('backoffice', 'user', 'twofactorEnabled').subscribe((enabled: boolean) => {
      if (enabled) {
        this.twofactorState = 'desableAuthenticatorSupport';
        return;
      }
      this.twofactorState = 'def';
    });
  }

  public changeTfaState(value: string) {
    this.twofactorState = value;
  }

  public enableTfaSetup() {
    this.changeTfaState('enableAuthenticatorSupport');
    this._store.dispatch(new TwoFactorSetup());
  }

  public enableTfa() {
    this._store.dispatch(new VerifyTwoFactor({ token: this.enableTfaCode.value}));
    this.enableTfaCode.reset();
  }

  public disableTfa() {
    this._store.dispatch(new DeleteTwoFactor({...this.disableTfaForm.value}));
    this.disableTfaForm.reset();
  }

  public openPopupCopyAddress() {
    this._dialog.open(PopupComponent, {
      data: {
        iconClose: 'icon-close',
        iconClass: 'icon-tick',
        message: 'The address has been copied to the clipboard',
      }
    });
  }
}
