import { Component, OnInit, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignService } from 'src/app/services/sign.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  role: any;
  coachFormShow = false;
  localForm: any;
  trieurForm: any;
  trieurData: any;
  errorCode: any;
  errorMsg = null;
  successMsg = null;
  coachForm: any;
  coachData: any;




  constructor(private signService: SignService, private router: Router,
  ) { }

  ngOnInit() {

    this.localForm = JSON.parse(localStorage.getItem('signupForm'));
    this.role = this.localForm.role;
    console.log('role', this.role)






  }


  isValid(form: NgForm) {


    //console.log(form.form.status=="VALID");
    return form.form.status == "VALID";
  }

  saveRegisterData(form: NgForm) {

    this.trieurForm = form.form.value;
    console.log(this.trieurForm);

    // if (this.role == "trieur") {
      this.trieurData = { ...this.trieurForm, ...this.localForm };
      
      console.log('trieurData', this.trieurData)
      if (this.role == "trieur") {
      this.signService.register(this.trieurData).subscribe(data => {
        console.log('resTrieur', data);

        if (data.success && data.success == true) {
          this.successMsg = 'Bienvenue chez Green Chain ' + this.trieurData.firstname;
          var loginData = {
            'email': this.trieurData.email,
            'password': this.trieurData.password
          }
          this.signService.login(loginData)
            .subscribe(val => {

              this.signService.getMe().subscribe((value) => {
                console.log('getMe',value);
                localStorage.setItem('currentUser', JSON.stringify(value.data))
                console.log(JSON.parse(localStorage.getItem('currentUser')).firstname);
                


                this.router.navigate(['/trieur-dashboard']);
              });


            });
        }
      },
      err => {        
        console.log('err', err);

        this.errorCode = err.error.status_code;
        if (this.errorCode == 422) this.errorMsg = 'Oops : Erreur de validation interne ';
        if (err.error.errors.email) {

          this.errorMsg = 'Oops: Cet email est déja utilisé';
          setTimeout(() => {

            this.router.navigate(['/']);

          }, 5000);



        }
        

      });
 localStorage.removeItem('signupForm');
}
 
    if (this.role == "coach") {
           this.coachFormShow = true;

    }

  }

  submitCoachData(form: NgForm){
    this.coachForm = form.form.value;
    console.log('coachForm',this.coachForm);
    console.log('trieurData',this.trieurData);

    this.coachData = { ...this.trieurData, ...this.coachForm };
    console.log('coachData',this.coachData);

     this.signService.register(this.coachData).subscribe(data => {
       console.log('resCoach', data);
       if (data.success && data.success == true) {
        this.successMsg = 'Bienvenue chez Green Chain ' + this.coachData.firstname;
        var loginData = {
          'email': this.coachData.email,
          'password': this.coachData.password
        }
        this.signService.login(loginData)
          .subscribe(val => {

            this.signService.getMe().subscribe((value) => {
              console.log('getMe',value);
              localStorage.setItem('currentUser', JSON.stringify(value.data))
              console.log(JSON.parse(localStorage.getItem('currentUser')).firstname);
              


              this.router.navigate(['/trieur-dashboard']);
            });


          });
      }
    },
    err => {        
      console.log('err', err);

      this.errorCode = err.error.status_code;
      if (this.errorCode == 422) this.errorMsg = 'Oops : Erreur de validation interne ';
      if (err.error.errors.email) {

        this.errorMsg = 'Oops: Cet email est déja utilisé';
        setTimeout(() => {

          this.router.navigate(['/']);

        }, 5000);



      }
      

    });

     localStorage.removeItem('signupForm');




  }

  back(){
    this.coachFormShow = false;

  }





  okAlert() {
    this.successMsg = null;
    this.errorMsg = null;
  }

  isCoach() {
    return this.role == "coach";
  }
}
