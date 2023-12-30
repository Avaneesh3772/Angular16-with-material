import { AbstractControl } from '@angular/forms';

export function AgeCustomValidator(control: AbstractControl): {[key:string] : any} | null {

  if (control.dirty && (control.value < 18 || control.value > 45)) {
      return { 'ageMismatch': true };
  }
  return null;

}
