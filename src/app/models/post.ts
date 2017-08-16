import { User } from "./user";
import { KafeDescription } from "./kafeDesc";
import { FileEntry } from "./fileEntry";
import { Hashtags } from "./hashtag";

export class Post {
  id :number	
  post	:string	
  kafeId	:number	
  mentions	:string	
  repostId	:number	
  replyId	:number	
  location	:string	
  confirmed	:boolean	
  likeCount	:number	
  repostCount	:number	
  createdAt	:string	
  updatedAt	:string
  isLiked:boolean

  user:User
  kafeDesc:KafeDescription;
  fileEntries:FileEntry;
  hashTag:Hashtags[];
  replys:Post[];
  likeUser:User[];
  repostUser:User[];

  constructor(){
    this.user=new User();
     this.kafeDesc=new KafeDescription();
     this.fileEntries=new FileEntry();
     this.replys=new Array<Post>();
     this.likeUser=new Array<User>();
     this.hashTag=new Array<Hashtags>();
     this.repostUser=new Array<User>();

  }

}