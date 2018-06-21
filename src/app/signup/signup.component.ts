import { ActivatedRoute } from '@angular/router';
import { FacebookLogin, GoogleLogin } from './../store/actions/social-network.action';
import { ValidatorsService } from './../shared/services/validators.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SignUp } from '../store/actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _store: Store<StoreStates>,
    private _validatorsService: ValidatorsService,
  ) {
  }

  ngOnInit() {
      this.form = this._fb.group({
          username: ['', Validators.required],
          email: ['', Validators.email],
          password: ['', Validators.required],
          profile: this._fb.group({
            firstname: ['', Validators.required]
          }),
          recaptchaReactive: [null, Validators.required]
        },
        {
          validator: this._validatorsService.checkPasswordsMatch
        });
  }

  public save(user: User): void {
    this._store.dispatch(new SignUp(user));
  }

  facebookLogin() {
    this._store.dispatch(new FacebookLogin());
  }

  googleLogin() {
    this._store.dispatch(new GoogleLogin());
  }
}
