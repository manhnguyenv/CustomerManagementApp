import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { DataSource } from '../model/datasource';

@NgModule({
    imports: [ModelModule,BrowserModule,  FormsModule],
    declarations: [StoreComponent],
    exports: [StoreComponent],
    providers: [DataSource]
})
export class StoreModule { }