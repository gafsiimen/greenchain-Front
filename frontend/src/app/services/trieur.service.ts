import { Injectable } from '@angular/core';
import { CURRENT_USER_TOKEN, apiUrl } from "../values";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrieurService {

  constructor(private _http: HttpClient) { }
  
  setHeaders(){
    const httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem(CURRENT_USER_TOKEN)
    });
    var options;
    return options =  {
      headers: httpHeaders
    };
  }

  getMapCoachsList(){
    return this._http.get<any>(apiUrl + 'coach/AllCoachs', this.setHeaders());
  }

  getMyCoach() {
    return this._http.get<any>(apiUrl + 'trieur/mycoach', this.setHeaders());
  }

  myPoints() {
    return this._http.get<any>(apiUrl + 'trieur/MyPoints', this.setHeaders());
  }
  
  MySacsNumbers() {
    return this._http.get<any>(apiUrl + 'trieur/MySacsNumbers', this.setHeaders());
  }

  MySacsHistory() {
    return this._http.get<any>(apiUrl + 'trieur/MySacsHistory', this.setHeaders());
  }


  chooseCoach(data) {
    return this._http.post<any>(apiUrl + 'trieurs/change_coach', data, this.setHeaders());
  }

  becomeCoach(data){
    return this._http.post<any>(apiUrl + 'trieurs/to_coach', data, this.setHeaders());
  }

  
}
