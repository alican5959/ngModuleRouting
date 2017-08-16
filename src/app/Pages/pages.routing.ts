import {Routes,RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { PagesComponent } from "./pages.component";
import { AuthGuard } from "./authguard";
// import { MiddlePage } from "./dashboard/middlepage/middlePageKafe/middlePageComponent";


export const routes : Routes = [
    {
        path:"register",
        loadChildren:"app/Pages/register/register.module#RegisterModule",
    
    },
    {
        path:"login",
        loadChildren:"app/Pages/login/login.module#LoginModule",
    
    },
    {
        path:"showcase",
        loadChildren:"app/Pages/showcase/showcase.module#ShowcaseModule",
    
    },
    // {
    //     path:"main",
    //     loadChildren:"app/Pages/dashboard/mainpage.module#MainpageModule",
    
    // },
      {
        path:"",
        component:PagesComponent,
        canActivate:[AuthGuard],
        children:[
            {path:'',redirectTo:'mainpage',pathMatch:'full'},
            // {path:'kafe',component:MiddlePage},
            {path:'mainpage',loadChildren:"./dashboard/mainpage.module#MainpageModule"},
            {path:'hashtag',loadChildren:"./dashboard/hashtag/hashtag.module#HashtagModule"},
            {path:'postdetail',loadChildren:"./dashboard/postdetail/postdetail.module#PostdetailModule"},
            {path:'profile',loadChildren:"./dashboard/profile/profile.module#ProfileModule"},
            //{path:'kafe',loadChildren:"./dashboard/kafe/kafe.module#KafeModule"},
        ]  
    },
]

export const routing :ModuleWithProviders= RouterModule.forChild(routes);