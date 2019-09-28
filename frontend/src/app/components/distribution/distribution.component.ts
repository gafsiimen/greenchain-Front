import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TrieurService } from 'src/app/services/trieur.service';
import { SignService } from 'src/app/services/sign.service';

@Component({
  selector: 'app-distribution',
  templateUrl: './distribution.component.html',
  styleUrls: ['./distribution.component.css']
})
export class DistributionComponent implements OnInit {

  paramsSubscription: Subscription;
  paramSacType: String;
  MySacsHistory = [];

  assignedSacsHistory = [
   

  ];

  collectedSacsHistory = [


  ];
  mySacNumbers: any;
  allMySacsHistory = [];


  constructor(private route: ActivatedRoute, private trieurService: TrieurService,
    private router: Router, private signService:SignService) { }

  ngOnInit() {


    this.trieurService.MySacsNumbers().subscribe(data => {
      this.mySacNumbers = data;
      // console.log('myEmptySacsNumbers =', this.mySacNumbers);
    });


    this.trieurService.MySacsHistory().subscribe(data => {

      this.allMySacsHistory = data.data;
      // console.log('allMySacsHistory =', this.allMySacsHistory);


    this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {


          this.paramSacType = params['type'];

          if(this.paramSacType){
          if (this.paramSacType == 'assigned') {

              this.assignedSacsHistory = this.allMySacsHistory.filter(data => data.status == 'empty');
              this.assignedSacsHistory=this.assignedSacsHistory.map(function(val) {
                return {
                    status: "Vide",                    
                    coach_name: val.coach_name.charAt(0).toUpperCase() + val.coach_name.slice(1),
                    barcode:val.barcode,
                    created_at:val.created_at,
                    type:val.type
                };
            });
              this.MySacsHistory = this.assignedSacsHistory;
              // console.log('empty', this.assignedSacsHistory)

          
          }
          else if (this.paramSacType == 'collected') {
              // console.log('allMySacsHistory =', this.allMySacsHistory);
              this.collectedSacsHistory = this.allMySacsHistory.filter(data => data.status == 'full');
              this.collectedSacsHistory=this.collectedSacsHistory.map(function(val) {
                return {
                    status: "Plein",                    
                    coach_name: val.coach_name.charAt(0).toUpperCase() + val.coach_name.slice(1),
                    barcode:val.barcode,
                    created_at:val.created_at,
                    type:val.type
                };
            });

              this.MySacsHistory = this.collectedSacsHistory;
              // console.log('full', this.collectedSacsHistory)

          }
          else this.router.navigate(['/']);
        } else this.router.navigate(['/distribution/assigned']);
        });



  }
    );
  
  }





}