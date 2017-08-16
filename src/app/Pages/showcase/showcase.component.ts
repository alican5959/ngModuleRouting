import {Component,OnInit} from "@angular/core";
import { FetchService, } from "./../fetch.service";
import {Headers,Response,URLSearchParams,RequestOptions} from "@angular/http";
import {FinKafeData} from "../../models/finKafeData";
import {Router} from "@angular/router";

@Component({
    selector:"showcase",
    templateUrl:"./showcase.html",
    styleUrls:["./showcase.scss"]
})


export class ShowcaseComponent{

    limit:number=0;
    offset:number=0;
    data:FinKafeData[]=new Array<FinKafeData>();
    page:FinKafeData[]=new Array<FinKafeData>();
    asd:FinKafeData[]=[];
    public selectedUser={};
    progressBar:boolean=false;

    constructor(private myService:FetchService,private router:Router){
        this.data=new Array<FinKafeData>();
        this.page=new Array<FinKafeData>();
    }

    
    ngOnInit(){ 
        this.getData(); 
        //this.onScroll();
    } 
    getData(){   
        console.log("asd");   
        this.myService.fetchData("https://restapi.finkafe.com/FinkafeRest1/webresources/auth/showcase")
        .subscribe((x)=>{this.data=x["data"]});  
   
    }
    onScroll () {
        this.progressBar=true;
        this.limit=20;
        this.offset=this.offset+20;
        console.log(this.offset);
        this.myService.fetchData("https://restapi.finkafe.com/FinkafeRest1/webresources/auth/showcase/?limit="+this.limit+"&offset="+this.offset )
        .subscribe((data)=> {this.asd=data.data
            
         });

         for(var item of this.asd){
            this.data.push(item)          
         }
         console.log(this.data)
        
       

    }
        onSelect(data){
            this.selectedUser=data;

        }
}

