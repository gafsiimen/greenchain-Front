import { Component, OnInit } from '@angular/core';
import { SignService } from 'src/app/services/sign.service';
import { UserService } from 'src/app/services/user.service';
import { TrieurService } from 'src/app/services/trieur.service';
import { apiUrl } from 'src/app/values';


@Component({
  selector: 'app-trieur-dashboard',
  templateUrl: './trieur-dashboard.component.html',
  styleUrls: ['./trieur-dashboard.component.css']
})
export class TrieurDashboardComponent implements OnInit {
  user: any;
  myreflink: any;
  myCoach= null;
  URL = apiUrl.slice(0,apiUrl.length-4);
  // 'http://localhost:8000/' ;
  noAvatarPicUrl='/assets/img/no-avatar.png';
  mySacNumbers: any;
  myPoints: any;
  publicStats: any;
  isConfirmedCoach: boolean;
  showCoachSection=false;
  pendingCoach=false;


  constructor(
    private signService: SignService,
     private userService : UserService,
    private trieurService : TrieurService

  ) { }

  ngOnInit() {

    this.isConfirmedCoach=  this.userService.isConfirmedCoach() ;

    this.signService.getMe()
    .subscribe(
      data => {
        this.user=data.data;
        
          if ((this.user.role=='trieur') || ((this.user.role=='coach') && (this.user.confirmed==0))){
            this.showCoachSection=true ;
          } else  this.showCoachSection=false ;
          if ((this.user.role=='coach') && (this.user.confirmed==0)) this.pendingCoach=true;
        

        console.log("profile: ", this.user)
        console.log("profile: ", this.showCoachSection)

      }
    );

     this.userService.getMyRefLink().subscribe(data=>{
 this.myreflink=data.data;
console.log(this.myreflink); 
     });

this.trieurService.getMyCoach().subscribe(data=>{
this.myCoach=data.data[0];
console.log('my coach =',this.myCoach);
    });


    this.trieurService.MySacsNumbers().subscribe(data=>{
      this.mySacNumbers=data;
      console.log('mySacNumbers =',this.mySacNumbers);
          });

          this.trieurService.myPoints().subscribe(data=>{
            this.myPoints=data;
            console.log('myPoints =',this.myPoints);
                }); 

                this.userService.getPublicStats().subscribe(data=>{
                  this.publicStats=data.data;
                 console.log('publicStats=',this.publicStats);
                      });                   
                    
                            

  }



}
