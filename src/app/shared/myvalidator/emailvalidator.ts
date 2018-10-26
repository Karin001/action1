import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
/**
 * Generated class for the PhoneValidatorDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
function regCheck(c: AbstractControl, reg: RegExp, name: string, message: string) {
  const match = reg.test(c.value);
  return !match ? {
    [name]: message
  } : null;
}
@Directive({
  selector: '[emailCheck]', // Attribute selector
  providers: [{ provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true }]
})
export class EmailValidatorDirective {
  constructor() {
    console.log('Hello forbiden Directive');
  }
  validate(control: AbstractControl): { [key: string]: any } | null {

    return regCheck(control,
      /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/, 'email', '请输入合法邮箱')

  }
}

