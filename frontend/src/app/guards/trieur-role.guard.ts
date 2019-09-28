import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SignService } from '../services/sign.service';

@Injectable({
  providedIn: 'root'
})
export class TrieurRoleGuard implements CanActivate {

  role: string;
  //isCoach=false;
  constructor(private signService: SignService, private _route: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let observable = new Observable<boolean>(observer => {  
     this.signService.getMe().subscribe((value) => {
      console.log("role=", value.data.role);
      console.log("coach confirmed=", value.data.confirmed);

      this.role = value.data.role;
      if (value.data.confirmed&&value.data.confirmed==1) 
      observer.next(false);
      
      else {
        observer.next(true);
        
        
      }
     

    }); 



});
console.log("observable=",observable);
return observable;
}
} 

