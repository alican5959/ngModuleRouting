import {RouterModule,Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

export const routes:Routes = [
    {path:"showcase",redirectTo:"showcase",pathMatch:"full"},
    {path:"**", redirectTo:"mainpage"}
]

export const routing :ModuleWithProviders =RouterModule.forRoot(routes,{useHash:true});
// export const routing :ModuleWithProviders =RouterModule.forRoot(routes);