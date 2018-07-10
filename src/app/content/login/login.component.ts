import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IRootState } from '../../store/reducers';
import { FacebookLogin, GoogleLogin, Login } from '../../store/actions/auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  public loader$: Observable<boolean>;
  public form: FormGroup;

  public constructor(
    private _fb: FormBuilder,
    private _store: Store<IRootState>,
  ) {
  }

  public ngOnInit() {
    this.loader$ = this._store.select('auth', 'loading');
    this.form = this._fb.group({
      username: ['', [Validators.required]],
      password: [''],
      tfaCode: [''],
      recaptchaReactive: [null, Validators.required]
    });
  }

  public login(user: User) {
    this._store.dispatch(new Login(user));
  }

  public facebookLogin() {
    this._store.dispatch(new FacebookLogin());
  }

  public googleLogin() {
    this._store.dispatch(new GoogleLogin());
  }
}
