import { ValidatorsService } from '../../shared/services/validators.service';
import { Component, OnInit, SecurityContext } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IRootState } from '../../store/reducers';
import { FacebookLogin, GoogleLogin, SignUp } from '../../store/actions/auth.action';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {

  public form!: FormGroup;

  public constructor(
    private _fb: FormBuilder,
    private _store: Store<IRootState>,
    private _validatorsService: ValidatorsService,
    private _sanitizer: DomSanitizer
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
    const sanitizedName = this._sanitizer.sanitize(SecurityContext.HTML, user.name) || '';
    const sanitizedUsername = this._sanitizer.sanitize(SecurityContext.HTML, user.username) || '';
    if (user.name !== sanitizedName || user.username !== sanitizedUsername) {
      alert('Name or Username is not valid. Try again.');
      return;
    }
    this._store.dispatch(new SignUp(user));
  }

  public facebookLogin() {
    this._store.dispatch(new FacebookLogin());
  }

  public googleLogin() {
    this._store.dispatch(new GoogleLogin());
  }

}
