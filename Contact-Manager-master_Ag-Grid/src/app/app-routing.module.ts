import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'Ag-Grid',loadChildren :'./grid-view/grid-view.module#GridViewModule'},
  {path: 'contact-manager',loadChildren :'./contact-manager/contact-manager.module#ContactManagerModule'},
  {path : '**' ,redirectTo: 'contact-manager'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
