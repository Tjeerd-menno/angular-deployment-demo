import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigSpyComponent } from './config-spy/config-spy.component';

const routes: Routes = [
  {
    path: '',
    children: [],
    component: ConfigSpyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
