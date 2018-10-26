import { ValidatorsService } from '../../shared/services/validators.service';
import { Component, OnInit, SecurityContext } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IRootState } from '../../store/reducers';
import { FacebookLogin, GoogleLogin, SignUp } from '../../store/actions/auth.action';
import { DomSanitizer } from '@angular/platform-browser';
import { LocalStorageService } from '../../shared/services/localStorage.service';

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
    private _sanitizer: DomSanitizer,
    private _localStorageService: LocalStorageService
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

    const referralHash = this._localStorageService.getItem('referralHash');
    if (referralHash === '8io080ru') {
      const imgPxl = document.createElement('img');
      imgPxl.src = 'https://secure.adnxs.com/px?id=1046337&seg=15157293&t=2';
      imgPxl.width = 1;
      imgPxl.height = 1;
      document.body.appendChild(imgPxl);
    }
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
