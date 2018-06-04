import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SignUp } from '../store/actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _store: Store<StoreStates>,
  ) { }

  ngOnInit() {
    this.form = this._fb.group({
      name: [''],
      surname: [''],
      username: [''],
      email: [''],
      password: [''],
      confirmPassword: [''],
      referredBy: [''],
    });
  }

  public save(user: User): void {
    this._store.dispatch(new SignUp(user));
  }

}
