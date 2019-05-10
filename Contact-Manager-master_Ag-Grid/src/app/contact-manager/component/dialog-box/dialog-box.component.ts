import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { User } from '../../modules/user';
import { FormControl, Validators } from '@angular/forms';
import { UserServiceService } from '../../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-dialog-box",
  templateUrl: "./dialog-box.component.html",
  styleUrls: ["./dialog-box.component.scss"]
})
export class DialogBoxComponent implements OnInit {
  constructor(private dialog: MatDialogRef<DialogBoxComponent>,private service :UserServiceService) {}

  user : User;

  avatar =[
    'svg-1','svg-2','svg-3','svg-4'
  ]

  ngOnInit() {
    this.user= new User();
  }

  save() {

    this.service.addUser(this.user);
    this.dialog.close(this.user);
    
  }
  cancel() {
    this.dialog.close();
  }

  name = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return this.name.hasError('required') ? 'You must enter a name' : '';
  }
}
