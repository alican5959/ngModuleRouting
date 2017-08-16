import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms"
import {LoginComponent} from "./login.component";
import {routing} from "./login.routing";

@NgModule({
    declarations:[
        LoginComponent,
    ],
    imports:[
        CommonModule,
        FormsModule,
        routing
    ],
})

export class LoginModule{}

