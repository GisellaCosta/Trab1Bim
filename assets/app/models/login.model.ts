export class Login {

    token: string;
    error?: string;
    userId: string;
    userEmail: string;

    constructor(token: string, error?: string) {
        this.token = token;
        this.error = error;
        this.userId;
        this.userEmail;
    }

}