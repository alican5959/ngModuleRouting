import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {ShowcaseComponent} from "./showcase.component";
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {PerfectScrollbarModule} from "angular2-perfect-scrollbar";
import { routing } from "./showcase.routing";

@NgModule({
    imports:[
        FormsModule,
        CommonModule,
        InfiniteScrollModule,
        PerfectScrollbarModule,
        routing,
    ],
    declarations:[
        ShowcaseComponent,
    ],
    
})

export class ShowcaseModule{}
