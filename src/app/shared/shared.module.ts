import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { ToggleMenuModule } from './toggle-menu/toggle-menu.module';



const importModules = [
  CommonModule,
  FlexLayoutModule,
  RouterModule,
  ToggleMenuModule,
]
@NgModule({
  imports:importModules,
  declarations: [],
  exports:[...importModules],
  providers:[],
})
export class SharedModule { }
