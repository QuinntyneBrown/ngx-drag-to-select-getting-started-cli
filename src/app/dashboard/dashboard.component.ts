import { Component } from "@angular/core";
import { Subject } from "rxjs/Subject";

@Component({
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
  selector: "app-dashboard"
})
export class DashboardComponent { 

  public onDestroy: Subject<void> = new Subject<void>();

  ngOnDestroy() {
    this.onDestroy.next();	
  }

  public documents: any[] = [];
  public selected: any[] = [];

  ngOnInit() {
    for (let id = 0; id < 6; id++) {
      this.documents.push({
        id,
        name: `Document ${id}`,
      });
    }
  }
}
