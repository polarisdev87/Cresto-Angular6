import { ValidatorsService } from '../../../shared/services/validators.service';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SetPassword } from '../store/actions/password.actions';
import { IRootState } from '../../../store/reducers';

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ResetPasswordFormComponent {
  public form: FormGroup;

  public constructor(
    private _fb: FormBuilder,
    private _store: Store<IRootState>,
    private _activatedRoute: ActivatedRoute,
    private _validatorsService: ValidatorsService
  ) {
    this.form = this._fb.group({
      // code: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    }, {
        validator: this._validatorsService.equalValidator
      });
  }

  public save({ password }: PasswordData): void {
    const passwordData: PasswordData = {
      password,
      hash: this._activatedRoute.snapshot.params.id
    };
    this._store.dispatch(new SetPassword(passwordData));
  }

}

