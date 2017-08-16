export class User {

    public id:number;
    public name:string
    public username:string
    public permissions:number
    public profileImage:string
    public permission :number	
    public bio	:string	
    public location	:string	
    public backgroundColor	:string	
    public backgroundImage	:string
    public postCount:number
    public followedByUser: number
    public followingOfUser:number
    public likeCount:number
    public email:string
    public password:string
    public privateUser:boolean
    public confirmed:boolean
    public birthday:Date
    public creationDate:Date
      constructor(){
        this.id=null;
        this.name="";
        this.username="",
        this.permissions=null,
        this.profileImage="",
        this.postCount=null,
        this.followedByUser=null,
        this.followingOfUser=null,
        this.likeCount=null,
        this.email="",
        this.password=""
        this.confirmed=true;
        this.birthday=null;
        this.creationDate=null;
    }
    
}