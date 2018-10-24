import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule} from './shared/shared.module';

import { RoutingModule } from './routing/routing.module';
import { CoreModule } from './core/core.module';




@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    SharedModule,
    RoutingModule
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
