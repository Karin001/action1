import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NormalMainComponent } from '../layout/normal/normal-main/normal-main.component';
import { DefaultComponent } from './default/default.component';
import { EmailModalComponent } from './email-modal/email-modal.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {
    path:'home',component:NormalMainComponent,
    children:[
      {path:'',component:DefaultComponent},
      {path:'**',component:ErrorpageComponent}
      //{path:'',component:EmailModalComponent}
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
