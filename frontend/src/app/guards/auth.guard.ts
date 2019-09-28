import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SignService } from '../services/sign.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private signService: SignService, private _route: Router){ }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log("Am I logged in ? => : ",this.signService.isLoggedIn())
      if(this.signService.isLoggedIn()){
        return true;
      }else{
        this._route.navigate(["/"]);
        return false;
      }
  } 
}
