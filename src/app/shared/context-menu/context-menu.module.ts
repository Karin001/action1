import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContextMenuComponent } from './components/context-menu/context-menu.component';
import { ContextMenuDirective } from './directives/context-menu.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContextMenuComponent, ContextMenuDirective],
  exports: [ContextMenuComponent, ContextMenuDirective],
  entryComponents:[ContextMenuComponent]
})
export class ContextMenuModule { }
