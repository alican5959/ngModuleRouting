import {Routes,RouterModule} from "@angular/router";
import {MainComponent} from "./mainpage.component";
import { MiddlePage } from "./middlepage/middlePageKafe/middlePageComponent";
import {myMiddlePage} from "./middlepage/middlePageMy/myMiddlePage.component";
//import { Kafe } from "./kafe/kafe.component";


const routes:Routes =[
    {
        path:"",
        component:MainComponent,
    }, 
    // {
    //     path:"kafe",
    //     component:Kafe,
    // },
    // {
    //     path:":id",
    //     component:MiddlePage,
    //     // outlet:"middlepage"
    // },
    // {
    //     path:"asd",
    //     component:myMiddlePage,
    //     // outlet:"mymiddlepage"
    // }
];

export const routing = RouterModule.forChild(routes);
