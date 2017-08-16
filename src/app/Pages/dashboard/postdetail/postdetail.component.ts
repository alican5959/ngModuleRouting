import {Component} from '@angular/core';
import { GlobalTexts } from "../../../../globals/globaltexts";
import {RequestOptions,Headers,URLSearchParams} from "@angular/http"
import { FetchService } from "../../fetch.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Hashtags } from "../../../models/hashtag";
import { Post } from "../../../models/post";
@Component({
    selector:"postdetail",
    templateUrl:"./postdetail.html",
    styleUrls:["./postdetail.scss"]
})

export class PostDetailComponent {


    userid:any;
    hashtags:Hashtags[]=new Array<Hashtags>();
    postid:any=0;
    hashtagName:any;
    post =new Post();
    isLiked=true;
    isReposted=true;


    constructor(private myService:FetchService,private router:Router,private route: ActivatedRoute){
     
    }
    ngOnInit(){
        this.getParamaters();
        this.getAllHashTags();
        this.getPostById();
    }
         getParamaters(){
            this.route.params.subscribe(params=>{
            this.postid=params.post
            console.log(this.postid)
        });
        }

        getAllHashTags(){
          const header:Headers=new Headers();
        header.append('Authorization',localStorage.getItem("token"));
        header.append('Content-Type', 'application/x-www-form-urlencoded');
        const options = new RequestOptions({ headers: header });

        this.myService.fetchData(`${GlobalTexts.rest_url}sessions/hashtags/query?limit=10&offset=0`,options)
        .subscribe((data)=> {return this.hashtags=data.data});
    
    }
        getPostById(){
        const header:Headers=new Headers();
        header.append('Authorization',localStorage.getItem("token"));
        header.append('Content-Type', 'application/x-www-form-urlencoded');
        const options = new RequestOptions({ headers: header });

        this.myService.fetchData(`${GlobalTexts.rest_url}sessions/posts/getPostById/`+this.postid+"/1",options)
        .subscribe((data)=> {return this.post=data.data,console.log(this.post)});
        // if(this.post.likeCount!=0 || this.post.repostCount !=0){
        //     this.isReposted=true
        //     this.isLiked=true
        // }
    }

}
