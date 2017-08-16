import {NgModule} from "@angular/core";
import {RegisterComponent} from "./register.component";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {routing} from "./register.routing";

@NgModule({
    declarations:[
        RegisterComponent,
    ],
    imports:[
        FormsModule,
        ReactiveFormsModule,
        routing
    ],

})

export class RegisterModule{}