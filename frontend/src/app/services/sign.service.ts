import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CURRENT_USER_TOKEN, apiUrl } from "../values";
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignService {
  options;
  constructor(private _http: HttpClient, private _router: Router) { }

  
  setHeaders() {
    const httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem(CURRENT_USER_TOKEN)
    });
    return this.options = {
      headers: httpHeaders
    };
  }
  login(data) {
    return this._http.post<any>(apiUrl + 'auth/login', data)
      .pipe(map(
        data => {
          console.log('user login', data);
          
          if (data && data !== null && data.data && data.data !== null) {
            localStorage.setItem(CURRENT_USER_TOKEN, data.data.access_token);
          }
         
        }));
        
  }

  register(data){
    return this._http.post<any>(apiUrl+'register',data);
  }

  // get user data
  getMe() {
    var UserInfo = this._http.get<any>(apiUrl + 'auth/user', this.setHeaders());
    return UserInfo;
  }

  // isLoggedIn() {
  //   if (localStorage.getItem(CURRENT_USER_TOKEN) !== null) {
  //     return true;
  //   }
  //   else { return false; }
  // }

   isLoggedIn() {
   
    let observable = new Observable<boolean>(observer => {

    this.getMe().subscribe((value) => {
    console.log('auth success');
    observer.next(true); 
     

    }, err => {
      console.log('auth failed');
      observer.next(false); 
    });
    
  });
    console.log('isLoggedIn observable',observable);

    return observable;


  }


  logout() {
    if (localStorage.getItem(CURRENT_USER_TOKEN) !== null) {
      //  this._http.get<any>(apiUrl + 'auth/logout', this.setHeaders()); //to check
      localStorage.removeItem(CURRENT_USER_TOKEN);

      this._router.navigate(["/"]);
    }
  }

























}