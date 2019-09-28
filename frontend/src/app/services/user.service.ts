import { Injectable } from '@angular/core';
import { CURRENT_USER_TOKEN, apiUrl } from "../values";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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
 

  // get coach data
  getMyRefLink() {
    return this._http.get<any>(apiUrl + 'users/myreflink', this.setHeaders());
  }

  getPublicStats(){
    return this._http.get<any>(apiUrl + 'users/public_stats');
  }

  isConfirmedCoach(){
   // return localStorage.getItem('currentUser');
   var currentUser= JSON.parse(localStorage.getItem('currentUser'));
   return (currentUser.confirmed&&currentUser.confirmed==1) ;   

  }

  isTrieur(){
    // return localStorage.getItem('currentUser');
    var currentUser= JSON.parse(localStorage.getItem('currentUser'));    
    return (currentUser.role=='trieur') ;   
 
   }
 
  storageCartItemsNumber(){
    if (localStorage.getItem('GC-Cart') == null) return 0 ;
    else {
      return JSON.parse(localStorage.getItem('GC-Cart')).length;
    } 
  }
  
  storageCartItems(){
   if (JSON.parse(localStorage.getItem('GC-Cart'))) 
   return JSON.parse(localStorage.getItem('GC-Cart'));
   else return null;
  }


  placeOrder(order){
    return this._http.post<any>(apiUrl + 'orders', order, this.setHeaders());      
    
    }
  
  myOrders(){

    return this._http.get<any>(apiUrl + 'users/myorders',this.setHeaders());     
  }

  cancelOrder(id){
    return this._http.put<any>(apiUrl + 'orders/cancel/'+id,null,this.setHeaders());      
    
    }

  updateProfile(fd){
    return this._http.post<any>(apiUrl +'users/profile_update',fd,this.setHeaders());
  }

  


}
