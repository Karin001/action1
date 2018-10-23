import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import { RouterModule } from '@angular/router';



const importModules = [
  CommonModule,
  FlexLayoutModule,
  RouterModule
]
@NgModule({
  imports:importModules,
  declarations: [],
  exports:importModules
})
export class SharedModule { }
