import {Component} from '@angular/core';
import { FetchService } from "../../../fetch.service";
import { User } from "../../../../models/user";
import { GlobalTexts } from "../../../../../globals/globaltexts";
import {RequestOptions,Headers,URLSearchParams} from "@angular/http"
import { ActivatedRoute, Router } from "@angular/router";
import { PostedKafe } from "../../../../models/postedKafe";
//import { Kafe } from "../../kafe/kafe.component";


@Component({
    selector:"middle",
    templateUrl:"./middlePage.html",
    styleUrls:["./middlePage.scss"]
})

export class MiddlePage {

    userid:any;
    id:any;
    kafename:any;
    subscribedKafeid:any;
    // kafes:Kafe[]=new Array<Kafe>();
    kafes:any;
    mykafes:PostedKafe[]=new Array<PostedKafe>();
    asd:PostedKafe[]=new Array<PostedKafe>();
    offset:any=0;
    postId:any;
    subscried=false;
    isLike=false;
    disLike=false;
    rePost=false;
    likeCount:any
    dislikeCount:number;
    post_id:number;


    constructor(private myService:FetchService,private router:Router){}
    
    ngOnInit(){
       
        this.subscried=false;
        this.getAllKafes();
        this.getKafeById();
       
    }

    getKafeById(){
        this.postId=localStorage.getItem("postId");
        this.id=localStorage.getItem("Kafeid");
        this.userid=localStorage.getItem("userid");
        this.kafename=localStorage.getItem("Kafename");
        const header:Headers=new Headers();
         header.append('Authorization',localStorage.getItem("token"));
        header.append('Content-Type', 'application/x-www-form-urlencoded');
        console.log(this.postId);
        const options = new RequestOptions({ headers: header });
        this.myService.fetchData(`${GlobalTexts.rest_url}sessions/kafes/`+this.id+"/"+this.userid+"?limit=20&offset="+this.offset,options)
        .subscribe((data)=> {
            this.mykafes=this.mykafes.concat(data.data),console.log(this.mykafes)
            for(var item of data.data){ 
                if(this.postId==item.id){
                    this.isLike=item.isLiked;
                    this.disLike=item.isDisLiked;
                    this.rePost=item.isReposted;
                    this.likeCount=item.likeCount
                }             
            }
        });
    


        this.offset=this.offset+20;

      
    }
    onSubscribe(){
        this.id=localStorage.getItem("Kafeid");
        this.userid=localStorage.getItem("userid");
        const header:Headers=new Headers();
        header.append('Authorization',localStorage.getItem("token"));
        header.append('Content-Type', 'application/x-www-form-urlencoded');
        const options = new RequestOptions({ headers: header });
        const body=new URLSearchParams();
        console.log(body);
        this.myService.putData(`${GlobalTexts.rest_url}sessions/kafes/subscribeKafe/`+this.id+"/"+this.userid,body,options)
        .subscribe();
        this.subscried=true;
    }
       unSubscribe(){
        this.id=localStorage.getItem("Kafeid");
        this.userid=localStorage.getItem("userid");
        const header:Headers=new Headers();
        header.append('Authorization',localStorage.getItem("token"));
        header.append('Content-Type', 'application/x-www-form-urlencoded');
        const options = new RequestOptions({ headers: header });
        const body=new URLSearchParams();
        console.log(body);
        this.myService.putData(`${GlobalTexts.rest_url}sessions/kafes/unsubscribeKafe/`+this.id+"/"+this.userid,body,options)
        .subscribe();
        this.subscried=false;
    }
         getAllKafes(){
            
        const header:Headers=new Headers();
        header.append('Authorization',localStorage.getItem("token"));
        header.append('Content-Type', 'application/x-www-form-urlencoded');
        const options = new RequestOptions({ headers: header });

        this.myService.fetchData(`${GlobalTexts.rest_url}sessions/kafes/all`,options)
        .subscribe((data)=> {for(var item of data.data){
            if(item.KafeDesc.id==this.id)
                {
                    this.subscried=item.isSuscribed;
     
                }
        
        } console.log(data.data) });
    
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


