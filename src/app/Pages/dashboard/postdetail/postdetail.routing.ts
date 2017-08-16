import {Routes,RouterModule} from "@angular/router";
import {PostDetailComponent} from "./postdetail.component";

const routes:Routes =[
    {
        path:"",
        component:PostDetailComponent,
    }, 

];

export const routing = RouterModule.forChild(routes);
