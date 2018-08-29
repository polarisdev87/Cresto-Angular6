import { Component, OnInit, SecurityContext } from '@angular/core';
import { ValidatorsService } from '../../shared/services/validators.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IRootState } from '../../store/reducers';
import { SignUp } from '../../store/actions/auth.action';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../../shared/services/localStorage.service';

@Component({
  selector: 'app-special-video',
  templateUrl: './special-video.component.html',
  styleUrls: ['./special-video.component.css']
})
export class SpecialVideoComponent implements OnInit {

  public form!: FormGroup;
  public constructor(
    private _fb: FormBuilder,
    private _store: Store<IRootState>,
    private _validatorsService: ValidatorsService,
    private _sanitizer: DomSanitizer,
    private _router: ActivatedRoute,
    private _localStorageService: LocalStorageService
  ) { }

  public ngOnInit() {
    // Referral link
    const referralHash: string = this._router.snapshot.queryParams['ref'];
    if (referralHash) {
      this._localStorageService.setItem('referralHash', referralHash);
    }

    // Form init
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

    // Prepare frontend
    const roboto = document.createElement('link');
    roboto.href = 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900';
    roboto.rel = 'stylesheet';
    document.head.appendChild(roboto);
    const fontawesome = document.createElement('link');
    fontawesome.href = 'https://use.fontawesome.com/releases/v5.0.10/css/all.css';
    fontawesome.rel = 'stylesheet';
    document.head.appendChild(fontawesome);
    const bootstrap = document.createElement('link');
    bootstrap.href = '/assets/css/bootstrap.min.css';
    bootstrap.rel = 'stylesheet';
    bootstrap.type = 'text/css';
    document.head.appendChild(bootstrap);
    const el1 = document.createElement('script');
    const el2 = document.createElement('script');
    const el3 = document.createElement('script');
    const el4 = document.createElement('script');
    const el5 = document.createElement('script');
    el1.src = '/assets/js/jquery.bundle.js';
    el1.onload = () => {
      el2.src = '/assets/js/bootstrap.min.js';
      el3.src = '/assets/js/particles.js';
      el4.src = '/assets/js/countdown.js';
      el5.src = '/assets/js/contest.js';
      document.body.appendChild(el2);
      document.body.appendChild(el3);
      document.body.appendChild(el4);
      document.body.appendChild(el5);
    } ;
    document.body.appendChild(el1);
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
}
