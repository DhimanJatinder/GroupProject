import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const SURVEY_API = environment.apiUrl + '/surveys/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  constructor(private httpClient: HttpClient) {}

  //get list
  getSurveyList(): Observable<any> {
    return this.httpClient.get(SURVEY_API + 'list', httpOptions);
  }
  //get one
  getSurvey(id: string): Observable<any> {
    return this.httpClient.get(SURVEY_API + id, httpOptions);
  }
  //add
  addSurvey(survey: any): Observable<any> {
    return this.httpClient.post(SURVEY_API + 'add', survey, httpOptions);
  }
  //edit
  editSurvey(survey: any): Observable<any> {
    return this.httpClient.put(
      SURVEY_API + 'edit/' + survey['_id'],
      survey,
      httpOptions
    );
  }
  //delete
  deleteSurvey(id: string): Observable<any> {
    return this.httpClient.delete(SURVEY_API + 'delete/' + id, httpOptions);
  }
}
