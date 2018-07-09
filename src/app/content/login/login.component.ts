import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IRootState } from '../../store/reducers';
import { Login, FacebookLogin, GoogleLogin } from '../../store/actions/auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  public loader$: Observable<boolean>;
  public form: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _store: Store<IRootState>,
  ) {
  }

  ngOnInit() {
    this.loader$ = this._store.select('auth', 'loading');
    this.form = this._fb.group({
      username: ['', [Validators.required]],
      password: [''],
      tfaCode: [''],
      recaptchaReactive: [null, Validators.required]
    });
  }

  login(user: User) {
    this._store.dispatch(new Login(user));
  }

  facebookLogin() {
    this._store.dispatch(new FacebookLogin());
  }

  googleLogin() {
    this._store.dispatch(new GoogleLogin());
  }
}
