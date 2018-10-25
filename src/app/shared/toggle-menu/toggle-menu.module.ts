import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleMenuComponent } from './toggle-menu/toggle-menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ToggleMenuComponent],
  exports:[ToggleMenuComponent]
})
export class ToggleMenuModule { }
