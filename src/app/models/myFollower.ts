import { UserFollower } from "./userFollower";

export class MyfollowerUser {
    followingYou: boolean
    IFollowed: boolean

    public userFollowers:UserFollower;
    constructor(){
        this.userFollowers=new UserFollower();
    }
}