import {Input} from '@angular/core';
import {User} from './user';
import {KafeDescription} from './kafeDesc';
import {FileEntry} from './fileEntry';

export class FinKafeData{
    
    id:number;
    post:string;
    kafeId:number;
    repostId:number;
    replyId:number;
    confirmed:boolean;
    likeCount:number;
    dislikeCount:number;
    repostCount:number;
    replyCount:number;
    entyId:number;
    videoEntryId:number;
    isReported:boolean;
    isLiked:boolean;
    isReposted:boolean;
    isDisliked:boolean;

    user:User[];
    kafeDesc:KafeDescription[];
    fileEntries:FileEntry[];
    constructor(){
        
    }
}