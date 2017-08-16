import { KafeDescription } from "./kafeDesc";
import { User } from "./user";
import { FileEntry } from "./fileEntry";

export class Kafes {
    id:Number;
    post	:String	
    kafeId	:Number	;
    respostId	:Number	
    replyId	:Number	
    confirmed	:Boolean	
    likeCount	:Number	
    repostCount:Number	
    createdAt	:String	
    entryId	:Number	
    videoEntryId	:Number	
    isLiked:boolean
    isDisliked:boolean
    isReposted:boolean

    KafeDesc:KafeDescription[];
    User:User[];
    FileEntries:FileEntry[];

    constructor(){
        this.isLiked=true;
        this.isDisliked=true;
        this.isReposted=true;
    }

}