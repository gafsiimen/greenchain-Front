import { Component, OnInit } from '@angular/core';
import { SignService } from 'src/app/services/sign.service';

@Component({
  selector: 'app-authed-navbar',
  templateUrl: './authed-navbar.component.html',
  styleUrls: ['./authed-navbar.component.css']
})
export class AuthedNavbarComponent implements OnInit {

  constructor(private signService: SignService) { }

  ngOnInit() {
  }

  logout(){
    return this.signService.logout();
  }

} 
