export class User {
    public auth_token: string;
    public email: string;
    
    
    constructor(UserJSON: any ) {
        console.log("User Constructor", UserJSON);
        console.log("Token", UserJSON.token);
        console.log("Masteries", UserJSON.masteries);
        
        this.auth_token = UserJSON.token;
        this.email = "abc";
    }
    
    public getUserToken() {
        return this.auth_token;
    }
}