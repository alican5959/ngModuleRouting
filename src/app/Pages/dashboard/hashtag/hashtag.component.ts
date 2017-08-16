import {Component} from '@angular/core';
import { User } from "../../../models/user";
import { GlobalTexts } from "../../../../globals/globaltexts";
import {RequestOptions,Headers,URLSearchParams} from "@angular/http"
import { UserAndAuth } from "../../../models/userAndAuth";
import { FetchService } from "../../fetch.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Kafes } from "../../../models/kafe";
import { Hashtags } from "../../../models/hashtag";
import { PostsByHashtag } from "../../../models/postsbyHashtag";

@Component({
    selector:"hashtag",
    templateUrl:"./hashtag.html",
    styleUrls:["./hashtag.scss"]
})

export class HashtagComponent {


    user:User=new User();
    userid:any;
    kafes:Kafes[]=new Array<Kafes>();
    hashtags:Hashtags[]=new Array<Hashtags>();
    id:any=0;
    hashtagName:any;
    postsByHashtag:PostsByHashtag[]=new Array<PostsByHashtag>();


    constructor(private myService:FetchService,private route: ActivatedRoute,private router:Router){
     
    }
    ngOnInit(){
        this.getParamater();
        this.getUser();
        this.getAllKafes();
        this.getAllHashTags();
        this.getPostByHashtag();
    }
    getParamater(){
            this.route.params.subscribe(params=>{
            this.hashtagName=params.hashtag
            console.log(this.hashtagName)
        });
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
        .subscribe((data)=> {return this.hashtags=data.data});
    }

    getPostByHashtag(){

        const header:Headers=new Headers();
        header.append('Authorization',localStorage.getItem("token"));
        header.append('Content-Type', 'application/x-www-form-urlencoded');
        const options = new RequestOptions({ headers: header });
        this.myService.fetchData(`${GlobalTexts.rest_url}sessions/posts/getAllPosts/1/`+this.hashtagName+"?limit=20&offset0",options)
        .subscribe((data)=>{this.postsByHashtag=data.data});
    }
    goToMainpage(){
        this.router.navigate(['/mainpage'])
    }
 
}
