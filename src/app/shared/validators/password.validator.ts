import { AbstractControl } from '@angular/forms';

export function PasswordValidator(control: AbstractControl): {[key:string] : any} | null {
    const passwordField = control.get('password');
    const confirmPasswordField = control.get('confirmPassword');

    return (passwordField?.value && confirmPasswordField?.value
                                && passwordField.value !== confirmPasswordField.value) ? { 'misMatch': true } : null;


}
