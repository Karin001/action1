import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneValidatorDirective } from './phone-validator';
import { FobidenValidatorDirective } from './fobiden-validator';
import { EmailValidatorDirective } from './emailvalidator';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PhoneValidatorDirective, FobidenValidatorDirective, EmailValidatorDirective],
  exports: [PhoneValidatorDirective, FobidenValidatorDirective, EmailValidatorDirective]
})
export class MyvalidatorModule { }
