import { Component, OnInit } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { TrieurService } from 'src/app/services/trieur.service';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { SignService } from 'src/app/services/sign.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  cartItems: any;
  availablePoints=0;
  balance=0;
  myForm:NgForm;
  successAlert=false;
  errorAlert=false;
  orderProducts= [];
  errorMsg: any;
  

  constructor(    private trieurService : TrieurService, private userService: UserService,
    private signService : SignService,) { }

  ngOnInit() {

    this.cartItems=JSON.parse(localStorage.getItem('GC-Cart'));
    
    this.trieurService.myPoints().subscribe(data=>{
      this.availablePoints=data.available_points;
      console.log('myAvailablePoints =',this.availablePoints);
          }); 
          if (this.cartItems){
    for (let item of this.cartItems){
      this.balance=this.balance+item.price;
    }
  }


  }

  removeProductFromStorageCart(item) {
    
    console.log('item',item)
    console.log('prior',this.cartItems)
  //   this.cartItems.filter(function(element){
  //     return element != item;
  // });
  for (var i = 0; i < this.cartItems.length; i++) {
        if (this.cartItems[i].id==item.id) {
        this.cartItems.splice(i, 1); break;    

      }

    }
    console.log('later',this.cartItems);
        localStorage.setItem('GC-Cart',JSON.stringify(this.cartItems)); 
    this.balance=0;
    for (let item of this.cartItems){
      this.balance=this.balance+item.price;
    }   
    
}

onSubmit(form:NgForm){
 
  console.log(form.form.value);
    console.log(form);

}
isValid(form:NgForm){
  
  console.log(form);
  console.log(form.form.status=="VALID");
  return form.form.status=="VALID" ;
}

validateShopping(){
  
 var orderProducts=[];
  for (let item of this.cartItems){

    item["quantity"]=1;
    orderProducts.push(item);
  } 
  console.log('orderProducts',this.orderProducts) ;
  
  var orderProductsToSend={};
  orderProductsToSend["products"]=orderProducts;
  console.log('orderProductsToSend=',orderProductsToSend)
  this.userService.placeOrder(orderProductsToSend).subscribe(
res=>{console.log('placing order result',res);
    if (res.success==true) {
    this.successAlert=true;
    localStorage.removeItem('GC-Cart'); 

  }
    else {
    this.errorAlert=true;
    this.errorMsg=res.error;
  }
}


); 
  
  
  
  
  
  //gotta empty the storage
  }

  closeAlert(){
    this.errorAlert=false;
  }
  
  logout(){
    return this.signService.logout();
  }
  } 









