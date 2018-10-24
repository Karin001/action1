import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NormalMainComponent } from '../layout/normal/normal-main/normal-main.component';
import { DefaultComponent } from './default/default.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {
    path:'home',component:NormalMainComponent,
    children:[
      {path:'',component:DefaultComponent}
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
