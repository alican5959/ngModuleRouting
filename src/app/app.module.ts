import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http";
import {routing} from "./app.routing";
import {PagesModule} from "./Pages/pages.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AuthService} from "./auth.service";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,   
  
  ],
  imports: [
    BrowserModule,
    PagesModule,
    routing,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
