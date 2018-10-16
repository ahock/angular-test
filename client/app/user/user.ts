export class User {
    public auth_token: string;
    public reload = false;
    public authenticated: boolean = false;
    public newuser: boolean = true;
    public last_login: string;
    
    public firstname: string;
    public lastname: string;
    public email: string;

    public masteries: string[] = [];
    public groups: string[] = ["Guest"];
    public eduobjectives: string[] = [];

    constructor(UserJSON: any ) {
        console.log("Constructor User: ", UserJSON);
        
        console.log("user_token", localStorage.getItem('user_token'));
        console.log("user_token", this.auth_token);
        console.log("expires_at", new Date(parseInt(localStorage.getItem('expires_at'))));
        console.log("jetzt", new Date());
        
        if(localStorage.getItem('user_token')!=null && localStorage.getItem('user_token')!=""){
            // There is an user authenticated but the app was reloaded
            console.log("User:", this);
            this.auth_token = localStorage.getItem('user_token');
            this.authenticated = true;
            // Reload of user data needed
            this.reload = true;
        }
        else {
            if(UserJSON!=undefined) {
                this.auth_token = UserJSON.token;
                this.firstname = UserJSON.firstname;
                this.lastname = UserJSON.lastname;
                this.email = UserJSON.email;
                this.masteries = UserJSON.masteries;
            }
        }
    }
    
    public getUserToken() {
        return this.auth_token;
    }
    public isAuthenticated() {
        return this.authenticated;
    }
    public isNew() {
        return this.newuser;
    }
    public getVerifications() {
        return this.masteries;
    }
    public getEduObjectives() {
        return this.eduobjectives;
    }
}