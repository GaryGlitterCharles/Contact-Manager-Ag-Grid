import { Component, OnInit, ViewChild } from "@angular/core";
import { UserServiceService } from "../../services/user-service.service";
import { User } from "../../modules/user";
import { Router } from "@angular/router";
import { MatSidenav } from "@angular/material";
import { Observable } from "rxjs/Observable";

const SMALL_SCREEN_SIZE = 720;
@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.scss"]
})
export class SideNavComponent implements OnInit {
  @ViewChild(MatSidenav) sidenav: MatSidenav;
  displayDetails: Observable<User[]>;
  opened: boolean = true;
  dir: string = "ltr";
  darkTheme: boolean = false;
  mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_SCREEN_SIZE}px)`);
  constructor(private services: UserServiceService, private router: Router) {}

  ngOnInit() {
    this.displayDetails = this.services.users;
    this.services.loadAll();

    this.router.events.subscribe(() => {
      if (this.isScreenSmall()) {
        this.sidenav.close();
      }
    });
    console.log(this.services.users);
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }
  togSideFun() {
    this.dir = this.dir == "ltr" ? "rtl" : "ltr";
  }
  togTheme() {
    this.darkTheme = !this.darkTheme;
  }
}
