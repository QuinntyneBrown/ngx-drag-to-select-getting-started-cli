import { Component } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { LocalStorageService } from "./shared/local-storage-service";
import { constants } from "./shared/constants";

@Component({
  templateUrl: "./master-page.component.html",
  styleUrls: ["./master-page.component.css"],
  selector: "app-master-page"
})
export class MasterPageComponent { 
  constructor(private _localStorageService: LocalStorageService) {

  }

  public get opened() {    
    return this._localStorageService.get({
      name: constants.DRAWER_OPEN
    });
  }

  public toggle() {
    this._localStorageService.put({ name: constants.DRAWER_OPEN, value: !this.opened });
  }
  public onDestroy: Subject<void> = new Subject<void>();

  ngOnDestroy() {
    this.onDestroy.next();	
  }
}
