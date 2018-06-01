import { FormGroup, ValidationErrors } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class ValidatorsService {
  public equalValidator({ value }: FormGroup): ValidationErrors | null {
    const [first, ...rest] = Object.keys(value || {});
    const valid: boolean = rest.every((field: string) => value[field] === value[first]);
    return valid ? null : { 'no-equal': true };
  }
}
