import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild
} from "@angular/core";
import { MatDialog } from "@angular/material";
import { DialogBoxComponent } from "../dialog-box/dialog-box.component";
import { UserServiceService } from "../../services/user-service.service";

@Component({
  selector: "app-tool-bar",
  templateUrl: "./tool-bar.component.html",
  styleUrls: ["./tool-bar.component.scss"]
})
export class ToolBarComponent implements OnInit {
  constructor(private dialog: MatDialog, private service: UserServiceService) {}
  @Output() toggleEvent = new EventEmitter();
  @Output() toggSide = new EventEmitter();
  @Output() toggleTheme = new EventEmitter();
  ngOnInit() {}

  dialogOpen() {
    let dialogRef = this.dialog.open(DialogBoxComponent, {
      width: "480px"
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
