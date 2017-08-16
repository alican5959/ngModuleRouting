import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {ProfileComponent} from "./profile.component";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";

import {routing} from "./profile.routing";
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
// import { Kafe } from "./kafe/kafe.component";

@NgModule({
    declarations:[
        ProfileComponent,
        // Kafe,
    ],
    imports:[
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        InfiniteScrollModule,
        routing
    ],

})

export class ProfileModule{}