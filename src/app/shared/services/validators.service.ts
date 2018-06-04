import { FormGroup, ValidationErrors, AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class ValidatorsService {
  public equalValidator({ value }: FormGroup): ValidationErrors | null {
    const [first, ...rest] = Object.keys(value || {});
    const valid: boolean = rest.every((field: string) => value[field] === value[first]);
    return valid ? null : { 'no-equal': true };
  }

  public checkPasswordsMatch(control: AbstractControl): ValidationErrors | null {
    const password: AbstractControl | null = control.get('password');
    const confirmPassword: AbstractControl | null = control.get('confirmPassword');
    if (!(password && confirmPassword)) {
      return null;
    }
    return password.value === confirmPassword.value ? null : { nomatch: true };
  }
}
