import {NgModule} from '@angular/core';
import { CommonModule }  from '@angular/common';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {PagesComponent} from './pages.component';
import {routing} from "./pages.routing";
import {FetchService} from "./fetch.service";
import { AuthGuard } from "./authguard";
// import { MiddlePage } from "./dashboard/middlepage/middlePageKafe/middlePageComponent";


@NgModule({
    imports:[
        CommonModule,
        InfiniteScrollModule,
        routing
    ],
    declarations:[
        PagesComponent,
        // MiddlePage
    ],
    providers:[FetchService,AuthGuard],
})

export class PagesModule {
    
}