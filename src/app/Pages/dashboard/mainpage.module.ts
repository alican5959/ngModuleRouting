import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {MainComponent} from "./mainpage.component";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {MiddlePage} from "./middlepage/middlePageKafe/middlePageComponent";
import {myMiddlePage} from "./middlepage/middlePageMy/myMiddlePage.component";
import {routing} from "./mainpage.routing";
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
// import { Kafe } from "./kafe/kafe.component";

@NgModule({
    declarations:[
        MainComponent,
         MiddlePage,
         myMiddlePage
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

export class MainpageModule{}