import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingRoutingModule } from './routing-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { DefaultComponent } from './default/default.component';
import { SharedModule } from '../shared/shared.module';
import { EmailModalComponent } from './email-modal/email-modal.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    SharedModule,
    RoutingRoutingModule
  ],
  declarations: [DefaultComponent, EmailModalComponent],
  entryComponents:[EmailModalComponent]
})
export class RoutingModule { }
