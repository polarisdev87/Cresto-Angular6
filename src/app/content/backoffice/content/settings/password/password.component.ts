import { CheckUserPassword, EditUserPassword } from './../store/actions/edit-pasword.actions';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IRootState } from '../../myreferrals/store/reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PasswordValidators } from '../../../../../shared/validators/password-match.validator';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.sass']
})
export class PasswordComponent implements OnInit {
  isLoading$: Observable<boolean>;
  isCurrentPasswordValid$: Observable<boolean>;
  error$: Observable<string>;
  form: FormGroup;
  currentPassword: FormControl = new FormControl('', [Validators.required]);

  changeClassAndtype = true;
  changeClassAndTypeenter = true;
  changeClassAndTypecomfirm = true;

  constructor(
    private _store: Store<IRootState>,
    private _fb: FormBuilder,
  ) {
    this.form = this._fb.group({
      password: ['', Validators.required],
      confirmPassword:  ['', Validators.required]
    }, { validator: PasswordValidators.checkPasswordMatch });
  }

  ngOnInit() {
    this.isLoading$ = this._store.select('settings', 'editPassword', 'isLoading');
    // TODO figure out design for error handling
    this.error$ = this._store.select('settings', 'editPassword', 'error');
    this.isCurrentPasswordValid$ = this._store.select('settings', 'editPassword', 'isCurrentPasswordValid');
    this._store.select('settings', 'editPassword', 'updated').pipe(
      filter((value: boolean) => value)
    ).subscribe(() => {
      this.currentPassword.reset();
      this.form.reset();
    });
  }

  checkCurrentPassword(currentPassword: string): void {
    this._store.dispatch(new CheckUserPassword({ currentPassword }));
  }

  editUserPassword(value: EditPasswordData): void {
    this._store.dispatch(new EditUserPassword({...value, currentPassword: this.currentPassword.value}));
  }

  changeClassAndType() {
    this.changeClassAndtype = !this.changeClassAndtype;
  }

  changeClassAndTypeEnter() {
    this.changeClassAndTypeenter = !this.changeClassAndTypeenter;
  }

  changeClassAndTypeComfirm() {
    this.changeClassAndTypecomfirm = !this.changeClassAndTypecomfirm;
  }
}
