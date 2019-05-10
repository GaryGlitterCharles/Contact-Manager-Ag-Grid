import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import {MaterialModule} from '../shared/material.module';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { GridViewComponent } from './grid-view.component';

const routes: Routes =[
  {path:'gridView' , component:GridViewComponent},
  {path:'**' , redirectTo:'gridView'}
]

@NgModule({
  declarations: [
    GridViewComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    AgGridModule.withComponents([]),
    RouterModule.forChild(routes)
  ]
})
export class GridViewModule { }
