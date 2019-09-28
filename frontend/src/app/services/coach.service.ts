import { Injectable } from '@angular/core';
import { CURRENT_USER_TOKEN, apiUrl } from "../values";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoachService {

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
  
  getAllCoach() {
    return this._http.get<any>(apiUrl + 'coach/AllCoachs', this.setHeaders());
  }
  getMyAgent() {
    return this._http.get<any>(apiUrl + 'coach/myagent', this.setHeaders());
  }
  getMyTrieurs() {
    return this._http.get<any>(apiUrl + 'coach/mytrieurs', this.setHeaders());
  }
  getCoachSacsNumber() {
    return this._http.get<any>(apiUrl + 'coach/MySacsNumbers', this.setHeaders());
  }
  getCoachSacHistory() {
    return this._http.get<any>(apiUrl + 'coach/MySacsHistory', this.setHeaders());
  }
  getCoachPoints() {
    return this._http.get<any>(apiUrl + 'coach/MyPoints', this.setHeaders());
  }
  toTrieur(data){
    return this._http.post<any>(apiUrl + 'coachs/to_trieur', data, this.setHeaders()).subscribe(data=>console.log(data));
  }
}
