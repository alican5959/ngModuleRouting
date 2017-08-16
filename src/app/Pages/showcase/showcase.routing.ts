import {Routes,RouterModule} from "@angular/router";
import { ShowcaseComponent } from "./showcase.component";


export const routes: Routes=[
    {
        path:"",
        component:ShowcaseComponent       
    },
]

export const routing = RouterModule.forChild(routes);