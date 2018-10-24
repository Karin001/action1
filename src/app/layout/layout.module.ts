import { NgModule } from '@angular/core';
import { HeaderComponent } from './normal/header/header.component';
import { FooterComponent } from './normal/footer/footer.component';
import { NormalMainComponent } from './normal/normal-main/normal-main.component';
import { SharedModule } from '../shared/shared.module';
import {BREAKPOINT, FlexLayoutModule} from '@angular/flex-layout';

const CUSTOM_BREAKPOINTS = [{
  alias: 'md.custom',
  suffix: 'MdCustom',
  mediaQuery: 'screen and (max-width: 920px)',
 
}];

export const CustomBreakPointsProvider = { 
  provide: BREAKPOINT,
  useValue: CUSTOM_BREAKPOINTS,
  multi: true
};


@NgModule({
  imports: [
    SharedModule,
    FlexLayoutModule
  ],
  declarations: [HeaderComponent, FooterComponent, NormalMainComponent],
  exports:[HeaderComponent,FooterComponent,NormalMainComponent],
  providers:[CustomBreakPointsProvider],
})
export class LayoutModule { }
