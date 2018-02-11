import { Directive, Input, forwardRef } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[mmMaxCharacterValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MaxCharacterValidatorDirective),
      multi: true,
    }]
})
export class MaxCharacterValidatorDirective implements Validator {
  @Input() mmMaxCharacterValidator: number;
  constructor() { }

  validate(c: AbstractControl): { [key: string]: any; } {
    return c.value && c.value.length > this.mmMaxCharacterValidator ? {
      maxCharacterCountError: {
        valid: false
      }
    } : null;
  }
}
