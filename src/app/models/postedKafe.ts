import { User } from "./user";
import { KafeDescription } from "./kafeDesc";
import { FileEntry } from "./fileEntry";

export class PostedKafe {
  id:Number
  post	:String	
  kafeId	:Number	
  respostId	:Number	
  replyId	:Number	
  confirmed	:Boolean	
  likeCount	:Number	
  repostCount:Number	
  createdAt	:String
  entryId	:Number	
  videoEntryId:Number
  
  isDisliked:Boolean
  isLiked:Boolean
  isReported:Boolean
  isReposted:Boolean
  
  user:User[];
  kafeDesc:KafeDescription[];
  fileEntries:FileEntry[];
}