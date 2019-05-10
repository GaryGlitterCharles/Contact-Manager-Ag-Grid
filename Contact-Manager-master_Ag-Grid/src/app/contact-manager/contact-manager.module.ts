import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContactManagerMainComponent } from "./contact-manager-main.component";
import { MainContentComponent } from "./component/main-content/main-content.component";
import { ToolBarComponent } from "./component/tool-bar/tool-bar.component";
import { SideNavComponent } from "./component/side-nav/side-nav.component";
import { Routes, RouterModule } from "@angular/router";
import { MaterialModule } from "../shared/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from "@angular/common/http";
import { UserServiceService } from "./services/user-service.service";
import { NotesComponent } from './component/notes/notes.component';
import { AgGridModule } from 'ag-grid-angular';
import { DialogBoxComponent } from './component/dialog-box/dialog-box.component';
const routes: Routes = [
  {
    path: "",
    component: ContactManagerMainComponent,
    children: [
      { path: ":id", component: MainContentComponent },
      { path: "", component: MainContentComponent }
    ]
  }
];

@NgModule({
  declarations: [
    ContactManagerMainComponent,
    MainContentComponent,
    ToolBarComponent,
    SideNavComponent,
    NotesComponent,
    DialogBoxComponent
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    RouterModule.forChild(routes)
  ],
  providers: [UserServiceService],
   entryComponents : [DialogBoxComponent]
})
export class ContactManagerModule {}
