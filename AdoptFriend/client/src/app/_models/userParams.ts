import { User } from "./users";

export class UserParams{
    gender: string;
    minAge = 1;
    maxAge = 99;
    pageNumber = 1;
    pageSize = 5;
    orderBy: 'lastActive';


constructor(user?: User){
    if(user){
        this.gender = user.gender === 'female' ? 'male' : 'female';
    }
}


}

