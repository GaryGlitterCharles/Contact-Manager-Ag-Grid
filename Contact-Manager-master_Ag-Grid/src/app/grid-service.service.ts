import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class GridServiceService {
  constructor(private http: HttpClient) {}

  viewData() {
    return this.http.get("http://www.mocky.io/v2/5cd5571b2e0000856b52762e");
  }
}
