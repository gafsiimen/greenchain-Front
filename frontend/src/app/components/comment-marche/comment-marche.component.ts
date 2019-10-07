import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SignService } from 'src/app/services/sign.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-comment-marche',
  templateUrl: './comment-marche.component.html',
  styleUrls: ['./comment-marche.component.css']
})
export class CommentMarcheComponent implements OnInit {

  loginData = { email: 'trieur@example.com', password: '123456' }
  signupForm={
    email:null,
    password:null,
    city:null,
    role:null,
  }

  myForm:NgForm;

  error = '';
  successfulLogin = false;
  firstname: any;

  @Inject(DOCUMENT) document
  trieur: any;
  formToSavaLocally={};

  constructor
    (
      private _signService: SignService,private router:Router


  ) {
    //var container = document.getElementById('container');
  }

  ngOnInit() {
  }



  popit() {
    console.log('should be flexed now');
    this._signService.isLoggedIn().subscribe((value) => {
      if (value == true) {
        console.log('value', value);
        this.router.navigate(["/trieur-dashboard"]);
      } else {
        var container = document.getElementById('signin-signup-div');
        var container2 = document.getElementById('div-hidden-test');
        container.style.display = 'flex';
        container2.style.display = 'flex';

      }
    });


  }

  signUpButton() {
    var container = document.getElementById('signin-signup-div');
    container.classList.add("right-panel-active");

  }
  signInButton() {
    var container = document.getElementById('signin-signup-div');
    container.classList.remove("right-panel-active");
  }


  closein() {
    console.log('closein function');

    var container = document.getElementById('signin-signup-div');
    var container2 = document.getElementById('div-hidden-test');

    container.style.display = 'none';
    container2.style.display = 'none';

  }



  onLogin() {
    this.error = '';
    return this._signService.login(this.loginData)
      .subscribe(data => {

        this._signService.getMe().subscribe((value) => {
          localStorage.setItem('currentUser', JSON.stringify(value.data))
          console.log(JSON.parse(localStorage.getItem('currentUser')).firstname);
          this.firstname = value.data.firstname;
          this.successfulLogin = true; 


          setTimeout(() => {
            this.router.navigate(['/trieur-dashboard']);
          }, 4000);


        });
      }, err => {
        //this.spinnerService.hide();
        // this.errMsgArr = [err.message]
        //console.log (this.errMsgArr[0]);
        this.error = err.error.error;
        console.log(err.error.error);
      });



  }


  
  onSignUp(form:NgForm){
    console.log('form value raw ',form.form.value);
    this.formToSavaLocally=form.form.value;
   
    console.log('formToSavaLocally',this.formToSavaLocally);
    localStorage.setItem('signupForm',JSON.stringify(this.formToSavaLocally));
    console.log(JSON.parse(localStorage.getItem('signupForm')));

    this.router.navigate(['/register']);

  }

  isValid(form:NgForm){  
    // console.log(form);
    // console.log(form.form.status=="VALID");
    return form.form.status=="VALID" ; 
  }


}
