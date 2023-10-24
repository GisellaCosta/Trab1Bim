export class Message {

    _id: string;
    content: string;
    userId: string;
    userEmail: string;
    
    constructor(id: string, content: string, userId: string, userEmail: string) {
        this._id = id;
        this.userId = userId;
        this.userEmail = userEmail;
        this.content = content;
    }

}