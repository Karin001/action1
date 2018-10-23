import { NgModule } from '@angular/core';
import { HeaderComponent } from './normal/header/header.component';
import { FooterComponent } from './normal/footer/footer.component';
import { NormalMainComponent } from './normal/normal-main/normal-main.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [HeaderComponent, FooterComponent, NormalMainComponent],
  exports:[HeaderComponent,FooterComponent,NormalMainComponent]
})
export class LayoutModule { }
