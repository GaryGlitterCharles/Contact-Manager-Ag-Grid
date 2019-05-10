import { Component, OnInit, ViewChild } from "@angular/core";
import { User } from "../../modules/user";
import { ActivatedRoute, Router } from "@angular/router";
import { UserServiceService } from "../../services/user-service.service";

@Component({
  selector: "app-main-content",
  templateUrl: "./main-content.component.html",
  styleUrls: ["./main-content.component.scss"]
})
export class MainContentComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service: UserServiceService,
    private router: Router
  ) {}
  displayUser: User;
  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params["id"];
      if (!id) {
        id = 1;
      }
      this.service.users.subscribe(users => {
        this.displayUser = this.service.userById(id);
      });
    });
  }
}
