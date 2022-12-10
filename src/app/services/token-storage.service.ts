import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  constructor() {}

  public signOut(): void {
    window.sessionStorage.clear();
  }

  /* save session token */
  public saveToken(saveToken: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, saveToken);
  }

  /* get session token */
  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  /* save user key */
  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, user);
  }

  /* get user key */
  public getUser(): string | null {
    return window.sessionStorage.getItem(USER_KEY);
  }
}
