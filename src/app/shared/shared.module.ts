import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PrimaryHeaderComponent } from "./primary-header.component";
import { MaterialModule } from "../material/material.module";
import { LocalStorageService } from "./local-storage-service";

const declarations: Array<any> = [
  PrimaryHeaderComponent
];

const providers: Array<any> = [
  LocalStorageService
];

@NgModule({
  declarations,
  imports: [
    CommonModule,
    MaterialModule
  ],  
  exports: declarations,
  providers
})
export class SharedModule { }
