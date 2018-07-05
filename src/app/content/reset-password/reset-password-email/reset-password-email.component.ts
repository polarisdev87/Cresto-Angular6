import { Store } from '@ngrx/store';
import { FormControl, Validators } from '@angular/forms';
import { Component, ViewEncapsulation } from '@angular/core';
import { SendResetPasswordEmail } from '../store/actions/password.actions';

@Component({
  selector: 'app-reset-password-email',
  templateUrl: './reset-password-email.component.html',
  styleUrls: ['./reset-password-email.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ResetPasswordEmailComponent {
  public email: FormControl = new FormControl('', [Validators.required, Validators.email]);

  public constructor(
    private _store: Store<StoreStates>,
  ) {}

  public sendResetPasswordEmail(email: string): void {
    this._store.dispatch(new SendResetPasswordEmail(email));
    this.email.reset();
  }
}
