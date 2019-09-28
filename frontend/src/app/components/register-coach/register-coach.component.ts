import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TrieurService } from 'src/app/services/trieur.service';

@Component({
  selector: 'app-register-coach',
  templateUrl: './register-coach.component.html',
  styleUrls: ['./register-coach.component.css']
})
export class RegisterCoachComponent implements OnInit {
  successMsg: any;
  errorMsg: any;
  errorCode: any;
  coachForm: any;


  constructor(private trieurService: TrieurService, private router: Router,
  ) { }

  ngOnInit() {
  }

  isValid(form: NgForm) {

    //console.log(form.form.status=="VALID");
    return form.form.status == "VALID";
  }

  submitCoachForm(form: NgForm) {
    this.coachForm = form.form.value;
    console.log('coachForm', this.coachForm);  


    this.trieurService.becomeCoach(this.coachForm).subscribe(data => {
      console.log('resCoach', data);
      if (data.success && data.success == true) {
        this.successMsg = 'Votre demande pour devenir Coach est envoyée avec succès ! Veuillez consulter votre boite email ';
        setTimeout(() => {

          this.router.navigate(['/profile']);

        }, 5000);
      }
    },
      err => {
        console.log('err', err);

        this.errorCode = err.error.status_code;
        if (this.errorCode == 422) this.errorMsg = 'Oops : Erreur de validation interne ';
        if (err.status == 403) {
        this.errorMsg = 'Oops : Merci de bien remettre tout vos sacs Green Chain à votre Coach actuel';
        setTimeout(() => {

          this.router.navigate(['/distribution']);

        }, 6000);
      }
      });


  }


  okAlert() {
    this.successMsg = null;
    this.errorMsg = null;
  }

}
