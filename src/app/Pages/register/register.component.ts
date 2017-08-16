import {Component} from '@angular/core';
import { FetchService } from "../fetch.service";
import { User } from "../../models/user";
import { GlobalTexts } from "../../../globals/globaltexts";
import {RequestOptions,Headers,URLSearchParams} from "@angular/http"
@Component({
    selector:"register",
    templateUrl:"./register.component.html",
    styleUrls:["./register.component.css"]   
})

export class RegisterComponent {

    constructor(private fetchService:FetchService){}
    public user:User=new User();
      header: Headers= new Headers();
     options= new RequestOptions({ headers: this.header });

    register(){
    let body = new URLSearchParams();
      body.set('name' , this.user.name);
      body.set('username' , this.user.username);
      body.set('email' , this.user.email);
      body.set('password' , this.user.password);
      console.log(body);
      console.log(this.user);
      this.fetchService.postData("http://restapi.finkafe.com/FinkafeRest1/webresources/auth/register",body, this.options).
      subscribe((data) => console.log(data));
    }
}


