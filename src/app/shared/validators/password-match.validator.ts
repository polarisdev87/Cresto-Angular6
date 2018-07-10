import { AbstractControl } from '@angular/forms';

export class PasswordValidators {
  public static checkPasswordMatch(control: AbstractControl) {
    const password: AbstractControl | null = control.get('password');
    const confirmPassword: AbstractControl | null = control.get('confirmPassword');

    return password.value === confirmPassword.value
      ? null
      : { nomatch: true };
  }
}
