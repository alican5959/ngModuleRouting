import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {PostDetailComponent} from "./postdetail.component";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";

import {routing} from "./postdetail.routing";
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
    declarations:[
        PostDetailComponent,
    ],
    imports:[
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        InfiniteScrollModule,
        routing
    ],

})

export class PostdetailModule{}