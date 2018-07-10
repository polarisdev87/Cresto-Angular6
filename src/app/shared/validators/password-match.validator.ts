import { AbstractControl } from '@angular/forms';

export class PasswordValidators {
  public static checkPasswordMatch(control: AbstractControl) {
    const password: AbstractControl  = control.get('password') as AbstractControl;
    const confirmPassword: AbstractControl = control.get('confirmPassword') as AbstractControl;

    return password.value === confirmPassword.value
      ? null
      : { nomatch: true };
  }
}
