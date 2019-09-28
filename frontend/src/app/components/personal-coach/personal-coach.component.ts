import { Component, OnInit } from '@angular/core';
import { TrieurService } from 'src/app/services/trieur.service';
import { apiUrl } from 'src/app/values';
import { SignService } from 'src/app/services/sign.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-personal-coach',
  templateUrl: './personal-coach.component.html',
  styleUrls: ['./personal-coach.component.css']
})
export class PersonalCoachComponent implements OnInit {

  seeMore = false;
  URL = apiUrl.slice(0, apiUrl.length - 4);
  noAvatarPicUrl = '/assets/img/no-avatar.png';
  iconUrl='/assets/img/marker-coach.svg';

  myCoach = null;
  showSelected = false;

  lat: number = 5.3743753;
  lng: number = -4.0166842;
  zoom: number = 12.5;



  lat1: number = 5.3597656;
  lng1: number = -4.0011882;
  coachsList = [];
  selectedCoach = null;
  chosenCoachData = {};
  canChange: boolean;
  wannaChange = false;
  chosenSuccessfully : boolean;
  errorMsg = null;
  confirmationWarning: boolean;
  selectedCoachId: any;
  changedSuccessfully : boolean;
  

  constructor(private trieurService: TrieurService, private signService: SignService,
    private router: Router, ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
  }

  ngOnInit() {



    this.trieurService.getMyCoach().subscribe(data => {
      this.myCoach = data.data[0];
      console.log('my coach =', this.myCoach);
    });


    this.trieurService.getMapCoachsList().subscribe(data => {
      this.coachsList = data.data;
      console.log('coachsList =', this.coachsList);
    });


  }

  changeCoach() {

    this.signService.getMe().subscribe(data => {
      this.wannaChange = true;
      console.log('role=', data.data.role);
      if (data.data.role == "trieur") {
        this.canChange = true;

        console.log('canChange=', this.canChange);
      }
    });


  }

  changeConfirmation(id) {
    console.log('button coach id=', id);
    this.selectedCoachId = id;
    console.log('selectedCoachId', this.selectedCoachId);

    if (this.myCoach) {
      console.log('my coach true')
      this.confirmationWarning = true;
    } else {
      console.log('my coach false')
      this.chooseCoach();
    }
  }



  chooseCoach() {
    this.confirmationWarning = false;
    console.log('in chooseCoach', this.selectedCoachId);
    var chosenCoachData = {};
    chosenCoachData['coach_user_id'] = this.selectedCoachId;
    console.log('chosenCoachData', chosenCoachData);

    this.trieurService.chooseCoach(chosenCoachData).subscribe(data => {
      if (data.success && data.success == true) {
        this.changedSuccessfully = true;
        this.chosenSuccessfully= true;
        
      }

       setTimeout(() => {
         
         this.router.navigate(['/trieur-dashboard']);
         console.log('3 secs ends');
        }, 6000);
    
         
    

     }, err => {
  console.log('In error', err);
  var errorCode = err.status;
  console.log('errorCode=', errorCode);
  if (errorCode == 400) {
    console.log('code=', 400);
    this.errorMsg = 'Oops : Vous devriez choisir un Coach de à votre ville !';
  }
  if (errorCode == 403) this.errorMsg = 'Oops : Merci de bien remettre tout vos sacs Green Chain à votre Coach actuel';
}

     );
  }



mapClick(event) {
  console.log('map clicked')
  console.log('event', event)
}

clickedMarker(coach) {
  this.showSelected = true;
  console.log('marker clicked')
  console.log('coach', coach)
  console.log('id', coach.id)
  this.selectedCoach = coach;

}


onSeeMore() {
  this.seeMore = !this.seeMore;
}

closeSelected() {
  this.showSelected = false;
  console.log('showSelected', this.showSelected)
}

closeAlert() {
  this.wannaChange = false;
  this.errorMsg = null;
  this.chosenSuccessfully = null;
  this.confirmationWarning = null;
  this.changedSuccessfully = null;
}

isValid(form: NgForm) {


  //console.log(form.form.status=="VALID");
  return form.form.status == "VALID";
}


logout() {
  return this.signService.logout();
}

}
