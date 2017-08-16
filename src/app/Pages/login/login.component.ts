import {Component} from "@angular/core";
import { AuthService } from "../../auth.service";
import { User } from "../../models/user";
import {RequestOptions,Headers,URLSearchParams,Http} from "@angular/http";
import {Router} from "@angular/router"



@Component({
    selector:"login",
    templateUrl:"./login.component.html",
    styleUrls:["./login.component.scss"]
})


export class LoginComponent{

    constructor(private authService:AuthService,private router:Router){}
    
    public user:User=new User();


    login(){
        this.authService.login(this.user.email,this.user.password).subscribe((data)=> {
            if(data.data){
                this.router.navigate(["/mainpage"]);
            }
       
        }) 
    }
}