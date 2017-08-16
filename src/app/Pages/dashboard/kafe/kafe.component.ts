// import {Component} from '@angular/core';
// import { FetchService } from "../../fetch.service";
// import { User } from "../../../models/user";
// import { GlobalTexts } from "../../../../globals/globaltexts";
// import {RequestOptions,Headers,URLSearchParams} from "@angular/http"
// import { Kafes } from "../../../models/kafe";
// import { Hashtags } from "../../../models/hashtag";


// @Component({
//     selector:"kafe",
//     templateUrl:"./kafe.html",
//     styleUrls:["/kafe.scss"]
// })

// export class Kafe {

//     user:User=new User();
//     userid:any;
//     id:any;
//     kafes:Kafes[]=new Array<Kafes>();
//     kafe:Kafes[]=new Array<Kafes>();
//     hashtags:Hashtags[]=new Array<Hashtags>();

//     constructor(private myService:FetchService){}
    
//     ngOnInit(){
//         this.getKafeById();
//         this.getUser();
//         this.getAllKafes();
//         this.getAllHashTags();
//     }
//      getUser(){
//         this.userid=Number.parseInt(localStorage.getItem("userid"));
//         const header:Headers=new Headers();
//         header.append('Authorization',localStorage.getItem("token"));
//         header.append('Content-Type', 'application/x-www-form-urlencoded');
//         const options = new RequestOptions({ headers: header });
//         // this.route.queryParams.subscribe((params:Params)=>{
//         //     this.user=
//         // })
    
//        return  this.myService.fetchData(`${GlobalTexts.rest_url}sessions/users/settings/`+this.userid,options)
//        .subscribe((data)=>{return this.user=data.data,console.log(this.user)});
//     }
//     getAllKafes(){
//         const header:Headers=new Headers();
//         header.append('Authorization',localStorage.getItem("token"));
//         header.append('Content-Type', 'application/x-www-form-urlencoded');
//         const options = new RequestOptions({ headers: header });
//         console.log("asdasdas")
//         this.myService.fetchData(`${GlobalTexts.rest_url}sessions/kafes/all`,options)
//         .subscribe((data)=> { this.kafes=data.data,console.log(this.kafes)});

//     }
//     getAllHashTags(){
//           const header:Headers=new Headers();
//         header.append('Authorization',localStorage.getItem("token"));
//         header.append('Content-Type', 'application/x-www-form-urlencoded');
//         const options = new RequestOptions({ headers: header });

//         this.myService.fetchData(`${GlobalTexts.rest_url}sessions/hashtags/query?limit=10&offset=0`,options)
//         .subscribe((data)=> {return this.hashtags=data.data,console.log(this.hashtags),console.log(data.data)});
//     }

//     getKafeById(){
//         this.id=localStorage.getItem("Kafeid");
//         this.userid=localStorage.getItem("userid");
//         console.log(this.id);
//         console.log(this.userid);
//         const header:Headers=new Headers();
//          header.append('Authorization',localStorage.getItem("token"));
//         header.append('Content-Type', 'application/x-www-form-urlencoded');
//         const options = new RequestOptions({ headers: header });
//         this.myService.fetchData(`${GlobalTexts.rest_url}sessions/kafes/`+this.id+"/"+this.userid,options)
//         .subscribe((data)=> {this.kafe=data.data,console.log(this.kafe)});
//     }
// }


