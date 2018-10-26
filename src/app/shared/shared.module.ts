import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MyvalidatorModule } from './myvalidator/myvalidator.module';
import { FormsModule } from '@angular/forms';
import { ContextMenuModule } from './context-menu/context-menu.module';




const importModules = [
  CommonModule,
  FlexLayoutModule,
  RouterModule,
  MyvalidatorModule,
  FormsModule,
  ContextMenuModule
]
@NgModule({
  imports: importModules,
  declarations: [],
  exports: [...importModules],
  providers: [],
})
export class SharedModule { }
