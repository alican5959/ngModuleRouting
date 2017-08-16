import { User } from "./user";
import { FileEntry } from "./fileEntry";
import { KafeDescription } from "./kafeDesc";
import { Hashtags } from "./hashtag";
import { RepostUser } from "./repostUser";

export class PostsByHashtag {
  id	:number	
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
  entryId	:number	
  videoEntryId	:number	
  isLiked	:boolean	
  isReported	:boolean

  user:User[];
  fileEntries:FileEntry[];
  kafeDesc:KafeDescription[];
  hashtag:Hashtags[];
  respostUser:RepostUser[];
}