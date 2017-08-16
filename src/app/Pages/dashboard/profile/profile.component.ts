import { Component } from '@angular/core';
import { FetchService } from "../../fetch.service";
import { URLSearchParams, Http, RequestOptions,Headers } from '@angular/http';
import {current} from "codelyzer/util/syntaxKind";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { GlobalTexts } from "../../../../globals/globaltexts";
import { User } from "../../../models/user";
import { Post } from "../../../models/post";
import { MyfollowerUser } from "../../../models/myFollower";



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent{
  userid:string;
  user:User=new User();
  followerUser:MyfollowerUser[]=new Array<MyfollowerUser>();
  postData:Post[]=new Array<Post>();
  Ifollowed=false;


  constructor(private myService:FetchService,private route: ActivatedRoute,private router:Router)
  {}

  ngOnInit(){
    this.getParamater();
    this.getUserById();
    this.getMyFollowers();

  }
  getUserById(){
        const header:Headers=new Headers();
        header.append('Authorization',localStorage.getItem("token"));
        header.append('Content-Type', 'application/x-www-form-urlencoded');
        const options = new RequestOptions({ headers: header });

        this.myService.fetchData(`${GlobalTexts.rest_url}sessions/posts/myProfile/`+this.userid,options)
        .subscribe((data)=> {return this.user=data.userProfile,this.postData=data.data,console.log(this.postData)});
  }
  getParamater(){
            this.route.params.subscribe(params=>{
            this.userid=params.user
            console.log(this.userid)
        });
     


  }
        getMyFollowers(){
        const header:Headers=new Headers();
        header.append('Authorization',localStorage.getItem("token"));
        header.append('Content-Type', 'application/x-www-form-urlencoded');
        const options = new RequestOptions({ headers: header });

        this.myService.fetchData(`${GlobalTexts.rest_url}sessions/follows/myFollowers/`+this.userid,options)
        .subscribe((data)=> {return this.followerUser=data.data,console.log(this.followerUser)});
  } 
      addFollow(id:any){
        const header:Headers=new Headers();
        header.append('Authorization',localStorage.getItem("token"));
        header.append('Content-Type', 'application/x-www-form-urlencoded');
        const options = new RequestOptions({ headers: header });
        const body=new URLSearchParams();
        body.set("follows_id",id);
        body.set("id",this.userid);
        this.myService.postData(`${GlobalTexts.rest_url}sessions/follows/addFollowers`,body,options)
        .subscribe((data)=> {console.log(data)});
        for(var item of this.followerUser){
          if(item.userFollowers.id==id){
            item.IFollowed=true
          }
        } 
      }
    //   goToProfilePage(id:Number){
    //     this.router.navigate(['/profile',{user:id}])
    // }
    // getProfileByName(){
    //     const header:Headers=new Headers();
    //     header.append('Authorization',localStorage.getItem("token"));
    //     header.append('Content-Type', 'application/x-www-form-urlencoded');
    //     const options = new RequestOptions({ headers: header });

    //     this.myService.fetchData(`${GlobalTexts.rest_url}sessions/posts/profileByUsername`+this.userid,options)
    //     .subscribe((data)=> {return this.user=data.userProfile,this.postData=data.data,console.log(this.postData)});
    // }
}
