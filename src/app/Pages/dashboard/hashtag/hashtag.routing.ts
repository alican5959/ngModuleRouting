import {Routes,RouterModule} from "@angular/router";
import {HashtagComponent} from "./hashtag.component";

const routes:Routes =[
    {
        path:"",
        component:HashtagComponent,
    }, 

];

export const routing = RouterModule.forChild(routes);
