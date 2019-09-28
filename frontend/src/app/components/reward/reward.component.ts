import { Component, OnInit } from '@angular/core';
import { TrieurService } from 'src/app/services/trieur.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { SignService } from 'src/app/services/sign.service';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.css']
})
export class RewardComponent implements OnInit {

  availablePoints = 0;
  myorders=[];
  cancelAlert=false;
  order_id: number;
  successAlert=false;


  constructor(private trieurService: TrieurService, private userService: UserService
    ,private router: Router, private signService:SignService) {
      this.router.routeReuseStrategy.shouldReuseRoute = function(){
        return false;
 } 
     }

  ngOnInit() {
    

    this.trieurService.myPoints().subscribe(data => {
      this.availablePoints = data.available_points;
    });

    this.userService.myOrders().subscribe(data => {
      this.myorders = data.data;

      for (let i=0;i<this.myorders.length;i++){

        switch (this.myorders[i].status) {
          case 'in_preparation' : this.myorders[i].status='En préparation'; break;
          case 'confirmed' : this.myorders[i].status='Confirmée'; break;
      case 'canceled' : this.myorders[i].status='Annulée'; break;
        case 'rejected' : this.myorders[i].status='Refusé'; break;
          default:break;
        }
        this.myorders[i].created_at=this.myorders[i].created_at.slice(0,this.myorders[i].created_at.length-3);

      
     } 
    });

    
  
  }

  confirmedCancel(){
    this.userService.cancelOrder(this.order_id).subscribe(
      res=>{ console.log('cacelling res',res)
      console.log('res.success out ',res.success)

        if(res.success&&res.success==true){
          console.log('res.success in ',res.success)
        this.successAlert=true;
        this.cancelAlert=false;
        console.log('3 secs start now');
         setTimeout(()=>{
          this.router.navigated = false;
        this.router.navigate([this.router.url]);
           console.log('3 secs ends');
        },10000);
      }
      
    });
  }


  popAlert(id){
    this.order_id=id;
    console.log(this.order_id);
    this.cancelAlert=!this.cancelAlert;
  }

  okAlert(){
    this.router.navigated = false;
    this.router.navigate([this.router.url]);
  }





}
