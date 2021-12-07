import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordConfirmation(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        let password = control.get('password')
        let passwordConfirm = control.get('passwordConfirm')
        
        if (password == null || passwordConfirm == null) {
            return null;
        }
        if (password.value == passwordConfirm.value){
            if (passwordConfirm.value == ''){
                passwordConfirm.setErrors({'required': true})
            }
            return null
        }
        else {
            passwordConfirm.setErrors({ 'Пароль подтвержден': true });
        }
        return password.value == passwordConfirm.value ? null : { 'Пароль не подтвержден': true };
    }
}