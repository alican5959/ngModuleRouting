import {Component} from '@angular/core';

import { User } from "../../models/user";
import { GlobalTexts } from "../../../globals/globaltexts";
import {RequestOptions,Headers,URLSearchParams} from "@angular/http"
import { UserAndAuth } from "../../models/userAndAuth";
import { FetchService } from "../fetch.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Kafes } from "../../models/kafe";
import { Hashtags } from "../../models/hashtag";


@Component({
    selector:"main",
    templateUrl:"./mainpage.html",
    styleUrls:["./mainpage.scss"]
})

export class MainComponent {


    user:User=new User();
    userid:any;
    kafes:Kafes[]=new Array<Kafes>();
    hashtags:Hashtags[]=new Array<Hashtags>();
    id:any=0;
    asd:any;


    constructor(private myService:FetchService,private router:Router){
     
    }
    ngOnInit(){
        this.getUser();
        this.getAllKafes();
        this.getAllHashTags();
    }
    getUser(){
        this.userid=Number.parseInt(localStorage.getItem("userid"));
        const header:Headers=new Headers();
        header.append('Authorization',localStorage.getItem("token"));
        header.append('Content-Type', 'application/x-www-form-urlencoded');
        const options = new RequestOptions({ headers: header });
        // this.route.queryParams.subscribe((params:Params)=>{
        //     this.user=
        // })
    
       return  this.myService.fetchData(`${GlobalTexts.rest_url}sessions/users/settings/`+this.userid,options)
       .subscribe((data)=>{return this.user=data.data});
    }
    getAllKafes(){
        const header:Headers=new Headers();
        header.append('Authorization',localStorage.getItem("token"));
        header.append('Content-Type', 'application/x-www-form-urlencoded');
        const options = new RequestOptions({ headers: header });

        this.myService.fetchData(`${GlobalTexts.rest_url}sessions/kafes/all`,options)
        .subscribe((data)=> { this.kafes=data.data,console});
    }
    getAllHashTags(){
          const header:Headers=new Headers();
        header.append('Authorization',localStorage.getItem("token"));
        header.append('Content-Type', 'application/x-www-form-urlencoded');
        const options = new RequestOptions({ headers: header });

        this.myService.fetchData(`${GlobalTexts.rest_url}sessions/hashtags/query?limit=10&offset=0`,options)
        .subscribe((data)=> {return this.hashtags=data.data,console.log(data.data)});
    
    }

    getKafeById(id:any,kafename){
        this.id=this.id+1;
        if(this.id==21){
            this.id=1;
        }
        localStorage.setItem("Kafeid",id);
        localStorage.setItem("Kafename",kafename);
        // const header:Headers=new Headers();
        // header.append('Authorization',localStorage.getItem("token"));
        // header.append('Content-Type', 'application/x-www-form-urlencoded');
        // const options = new RequestOptions({ headers: header });
        // this.myService.fetchData(`${GlobalTexts.rest_url}sessions/kafes/`+this.id+"/"+this.userid,options)
        // .subscribe((data)=> {localStorage.setItem("Kafes",data.data),console.log(this.asd)});
    }
    sifirla(){
        this.id=0;
    }
    goToHashtag(hashtag:any){
        this.router.navigate(['/hashtag',{hashtag:hashtag}])
    }
    goToProfilePage(id:Number){
        this.router.navigate(['/profile',{user:id}])
    }
}
