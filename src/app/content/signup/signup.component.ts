import { ValidatorsService } from '../../shared/services/validators.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IRootState } from '../../store/reducers';
import { SignUp, FacebookLogin, GoogleLogin } from '../../store/actions/auth.action';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _store: Store<IRootState>,
    private _validatorsService: ValidatorsService,
  ) {
  }

  public ngOnInit() {
    this.form = this._fb.group({
      username: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required],
      name: ['', Validators.required],
      recaptchaReactive: [null, Validators.required]
    },
      {
        validator: this._validatorsService.checkPasswordsMatch
      });
  }

  public save(user: UserToCreate): void {
    this._store.dispatch(new SignUp(user));
  }

  public facebookLogin() {
    this._store.dispatch(new FacebookLogin());
  }

  public googleLogin() {
    this._store.dispatch(new GoogleLogin());
  }
}
