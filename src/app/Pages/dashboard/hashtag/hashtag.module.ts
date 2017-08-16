import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {HashtagComponent} from "./hashtag.component";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";

import {routing} from "./hashtag.routing";
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
// import { Kafe } from "./kafe/kafe.component";

@NgModule({
    declarations:[
        HashtagComponent,
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

export class HashtagModule{}