import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const AUTH_API = environment.apiUrl + "/auth";
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  /* Login service */
  public login(displayName: String, password: String): Observable<any>{
    return this.httpClient.post(AUTH_API+'login', {displayName, password}, httpOptions);
  }

  /* Register service */
  public register(displayName: String, password: String, emailAddress: String): Observable<any> {
    return this.httpClient.post(AUTH_API+'register', {
      displayName,
      password,
      emailAddress
    }, httpOptions)
  }

}
