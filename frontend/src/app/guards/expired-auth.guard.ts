import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SignService } from '../services/sign.service';

@Injectable({
  providedIn: 'root'
})
export class ExpiredAuthGuard implements CanActivate {

  constructor(private signService: SignService, private _route: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let observable = new Observable<boolean>(observer => {
      this.signService.getMe().subscribe((value) => {
        
        console.log("value.success=", value.success);


        if (value.success)
          {
            console.log("value.success=", value.success);
            observer.next(true); 
          }

      }, err => {
        console.log("err=", err);
        this._route.navigate(["/"]);
        observer.next(false); 
      });



    });
    console.log("observable=", observable);
    
    //if ( observable._isScalar==false)  this._route.navigate(["/"]);
    return observable;
  }
}

