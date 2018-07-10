import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

// La funzione prende in ingresso una RegExp e ritorna una ValidatorFn
export function dateValidator(dateRe: RegExp): ValidatorFn {
    // Questa ritorna un AbstractControl che in caso positivo (se la RegExp è soddisfatta) è null
    // altrimenti è un messaggio strutturato nella forma key/value (validation error object)
    return (control: AbstractControl): { [key: string]: any } => {
        const date = dateRe.test(control.value);
        return date ? null : { 'date': { value: control.value } };
    };
}

@Directive({
    selector: '[appDate]',
    providers: [{ provide: NG_VALIDATORS, useExisting: DateValidatorDirective, multi: true }]
})
export class DateValidatorDirective implements Validator {
    @Input('appDateAttribute') appDate: string;

    validate(control: AbstractControl): { [key: string]: any } {
        return this.appDate ? dateValidator(new RegExp(this.appDate))(control) : null;
    }
}
