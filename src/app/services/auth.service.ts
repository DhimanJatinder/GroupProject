import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const AUTH_API = environment.apiUrl + "/auth/";
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private httpClient: HttpClient) { }

  /* Login service */
  public login(username: string, password: string): Observable<any>{
    return this.httpClient.post(AUTH_API+'login', {username, password}, httpOptions);
  }

  /* Register service */
  public register(username: string, password: string, emailAddress: string): Observable<any> {
    return this.httpClient.post(AUTH_API+'register', {
      username,
      password,
      emailAddress
    }, httpOptions);
  }

}
