// src/app/auth/auth.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';

@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: '23kRua8QIGU9V1gfK5hBmPOOVMfJ5zTG',
    domain: 'iod.eu.auth0.com',
    responseType: 'token id_token',
    audience: 'https://iod.eu.auth0.com/userinfo',
    redirectUri: 'http://angular-test-dswi.c9users.io:8080/callback',
    scope: 'openid profile'
  });

  constructor(public router: Router) {}

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      console.log("authResult:", authResult);
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        console.log("Angemeldet als:", authResult.idTokenPayload.sub);
        this.router.navigate(['/home']);
      } else if (err) {
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
        this.router.navigate(['/home']);
      }
    });
  }

  private setSession(authResult: any): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('user_token', authResult.idTokenPayload.sub);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('user_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  public getUserToken(): string {
    // Return topken of user, not the user id
    return     localStorage.getItem('user_token');
  }
}