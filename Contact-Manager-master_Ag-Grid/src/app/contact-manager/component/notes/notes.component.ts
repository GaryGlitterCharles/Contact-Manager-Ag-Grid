import { Component, OnInit, Input } from "@angular/core";
import { Note } from "../../modules/note";
import { UserServiceService } from "../../services/user-service.service";

@Component({
  selector: "app-notes",
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.scss"]
})
export class NotesComponent implements OnInit {
  @Input() notes: Note[];
  rowData: any;
  defaultColDef;
  columnDefs;
  
  constructor(private service: UserServiceService) {}

  ngOnInit() {
    this.columnDefs = [
      { headerName: "ID", field: "id", checkboxSelection: true, type: 'nonEditableColumn',rowDrag: true,width: 300 },
      { headerName: "Title", field: "title",width: 300 },
      { headerName: "Date", field: "date",width: 300 }
    ];
    this.rowData = this.notes;

    this.defaultColDef = {
      sortable: true,
       filter: true, 
       editable: true,resizable: true,
      
    }
  }
}
