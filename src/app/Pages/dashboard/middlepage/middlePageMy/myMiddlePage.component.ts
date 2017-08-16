import {Component} from '@angular/core';
import { FetchService } from "../../../fetch.service";
import { User } from "../../../../models/user";
import { GlobalTexts } from "../../../../../globals/globaltexts";
import {RequestOptions,Headers,URLSearchParams} from "@angular/http"
import { Kafes } from "../../../../models/kafe";
import { Router } from "@angular/router";
import { Post } from "../../../../models/post";


@Component({
    selector:"myPage",
    templateUrl:"./myMiddlePage.html",
    styleUrls:["./myMiddlePage.scss"]
})

export class myMiddlePage {

    userid:any;
    id:any;
    mykafes:Kafes[]=new Array<Kafes>();
    kafes:Kafes[]=new Array<Kafes>();
    offset:any=0;
    post_id:number;

    likeCount:any
    dislikeCount:number;
    constructor(private myService:FetchService,private router:Router){
       
    }
    
    ngOnInit(){
        this.getFeedList();
        

    }
    getFeedList(){
        const header:Headers=new Headers();
        header.append('Authorization',localStorage.getItem("token"));
        header.append('Content-Type', 'application/x-www-form-urlencoded');
        const options = new RequestOptions({ headers: header });
        this.myService.fetchData(`${GlobalTexts.rest_url}sessions/posts/feedList/2?limit=20&offset=`+this.offset,options).subscribe((data)=> 
        {this.kafes=this.kafes.concat(data.data) ,console.log(this.kafes)}
    )
        this.offset=this.offset+20;
    }
     getAllKafes(){
        const header:Headers=new Headers();
        header.append('Authorization',localStorage.getItem("token"));
        header.append('Content-Type', 'application/x-www-form-urlencoded');
        const options = new RequestOptions({ headers: header });

        this.myService.fetchData(`${GlobalTexts.rest_url}sessions/kafes/all`,options)
        .subscribe((data)=> { this.kafes=data.data,console});
    }
    likePost(id:any,likeCount:any){
        this.post_id=id;
        this.userid=localStorage.getItem("userid");
        const header:Headers=new Headers();
        header.append('Authorization',localStorage.getItem("token"));
        header.append('Content-Type', 'application/x-www-form-urlencoded');
        const options = new RequestOptions({ headers: header });   
        const body=new URLSearchParams();
        body.set("user_id",this.userid);
        body.set("post_id",id);
        this.myService.postData(`${GlobalTexts.rest_url}sessions/posts/like`,body,options)
        .subscribe((data)=> {});
        console.log(this.kafes)
         for(var item of this.kafes){
             if(item.id==id){
                 item.isLiked=true;
               
             }
         }
 

        this.likeCount=likeCount+1; 
        }
       unLikePost(id:any){
        this.userid=localStorage.getItem("userid");
        const header:Headers=new Headers();
        header.append('Authorization',localStorage.getItem("token"));
        header.append('Content-Type', 'application/x-www-form-urlencoded');
        const options = new RequestOptions({ headers: header });   
        const body=new URLSearchParams();
        body.set("user_id",this.userid);
        body.set("post_id",id);
        this.myService.postData(`${GlobalTexts.rest_url}sessions/posts/unlike`,body,options)
        .subscribe((data)=> {console.log(data.data)});
        
           for(var item of this.kafes){
             if(item.id==id){
                 item.isLiked=false;
                
             }
         }
        }
        disLikePost(post_id:any,dislikeCount:any){
        this.userid=localStorage.getItem("userid");
        const header:Headers=new Headers();
        header.append('Authorization',localStorage.getItem("token"));
        header.append('Content-Type', 'application/x-www-form-urlencoded');
        const options = new RequestOptions({ headers: header });   
        const body=new URLSearchParams();
        body.set("user_id",this.userid);
        body.set("post_id",post_id);
        this.myService.postData(`${GlobalTexts.rest_url}sessions/posts/dislike`,body,options)
        .subscribe((data)=> {console.log(data.data)});
        for(var item of this.kafes){
             if(item.id==post_id){
                 item.isDisliked=true
                
             }
         }
        this.dislikeCount=dislikeCount+1;
    
        }
        unDislikePost(post_id:any){
        this.userid=localStorage.getItem("userid");
        const header:Headers=new Headers();
        header.append('Authorization',localStorage.getItem("token"));
        header.append('Content-Type', 'application/x-www-form-urlencoded');
        const options = new RequestOptions({ headers: header });   
        const body=new URLSearchParams();
        body.set("user_id",this.userid);
        body.set("post_id",post_id);
        this.myService.postData(`${GlobalTexts.rest_url}sessions/posts/undislike`,body,options)
        .subscribe((data)=> {console.log(data.data)});
        for(var item of this.kafes){
             if(item.id==post_id){
                 item.isDisliked=false
                
             }
         }
        }
        repost(postid:any){
        this.userid=localStorage.getItem("userid");
        const header:Headers=new Headers();
        header.append('Authorization',localStorage.getItem("token"));
        header.append('Content-Type', 'application/x-www-form-urlencoded');
        const options = new RequestOptions({ headers: header });   
        const body=new URLSearchParams();
        body.set("userId",this.userid);
        body.set("repostId",postid);
        console.log(postid);
        this.myService.postData(`${GlobalTexts.rest_url}sessions/posts/addRepost`,body,options)
        .subscribe((data)=>{console.log(data.data)});
        for(var item of this.kafes){
             if(item.id==postid){
                item.isReposted=true; 
                
             }
         }
        
        }
        deleteRepost(postid:any){
        this.userid=localStorage.getItem("userid");
        const header:Headers=new Headers();
        header.append('Authorization',localStorage.getItem("token"));
        header.append('Content-Type', 'application/x-www-form-urlencoded');
        const options = new RequestOptions({ headers: header });   
        const body=new URLSearchParams();
        body.set("userId",this.userid);
        body.set("repostId",postid);
        console.log(postid);
        this.myService.postData(`${GlobalTexts.rest_url}sessions/posts/deleteRepost`,body,options)
        .subscribe((data)=>{console.log(data.data)});
              for(var item of this.kafes){
             if(item.id==postid){
                item.isReposted=false; 
                
             }
         }
        }
    goToPostDetail(id:number){
        this.router.navigate(["/postdetail" ,{post:id}])
    }
}


