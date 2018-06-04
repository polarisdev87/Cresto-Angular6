import { getUserLoader } from './../store/selectors/auth.selectors';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Login } from '../store/actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loader$: Observable<boolean>;
  public form: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _store: Store<StoreStates>,
  ) { }

  ngOnInit() {
    this.loader$ = this._store.select(getUserLoader);
    this.form = this._fb.group({
      username: ['', [Validators.required]],
      password: [''],
      tfa: ['']
    });
  }

  login(user: User): void {
    this._store.dispatch(new Login(user));
  }

}
