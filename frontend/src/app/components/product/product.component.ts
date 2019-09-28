import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { SignService } from 'src/app/services/sign.service';
import { UserService } from 'src/app/services/user.service';
import { Products } from 'src/app/values';

// import { BoutiqueComponent } from './components/boutique/BoutiqueComponent';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  Products = Products;
  param_id: number;
  paramsSubscription: Subscription;
  myProduct: { id: number; category: string; name: string; city: string; partenaire: string; quantity: number; pictureUrl: string; price: number; };
  bottles: number;
  authed = false;
  storageCartItemsNumber: any;
  currentQuantity: number;
  cartToPush = [];
  myProductArray = [];
  i: number;
  currentPrice:number;
  relatedProducts= [];



  constructor(private route: ActivatedRoute, private _signService: SignService,
    private _userService: UserService,private _route: Router,private router: Router) { }

  ngOnInit() {

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
       
          return;
      } 
      window.scrollTo(0, 0)
  });


    this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.param_id = params['id'];
          console.log(this.param_id);
          this.myProduct = this.Products.find(element => element.id == this.param_id);
          console.log(this.myProduct);
          this.bottles = Math.round(this.myProduct.price * 50 / 125);
          this.authed = this._signService.isLoggedIn();
          this.storageCartItemsNumber = this._userService.storageCartItemsNumber();
          this.currentQuantity = 1;
          this.currentPrice = this.myProduct.price;
          
          this.relatedProducts= [];
          for (let product of this.Products) {
            if (product!=this.myProduct) 
            this.relatedProducts.push(product);    
    
          }
        }
      );

      
  }

  authBehavior(){

    if (this._signService.isLoggedIn() ) 
      this._route.navigate(["/trieur-dashboard"]);
      else 
      this._route.navigate(["trieur-dashboard"]);    

  }

  quantityIncrement() {

    this.currentQuantity++;
    this.currentPrice=this.myProduct.price*this.currentQuantity;

  }
  quantityDecrement() {

    this.currentQuantity--;
    this.currentPrice=this.myProduct.price*this.currentQuantity;


  }

  addProductToStorageCart() {
    
    let i:number;
    for (i=0;i<this.currentQuantity;i++)
    this.myProductArray.push(this.myProduct);

    this.cartToPush = JSON.parse(localStorage.getItem('GC-Cart'));

    if (this.cartToPush) {
      for (i=0;i<this.currentQuantity;i++)
      this.cartToPush.push (this.myProduct);
      localStorage.setItem('GC-Cart',JSON.stringify(this.cartToPush));
    } 
    else {
    localStorage.setItem('GC-Cart',JSON.stringify(this.myProductArray));
  }

  this.cartToPush = JSON.parse(localStorage.getItem('GC-Cart'));

  this.storageCartItemsNumber = this._userService.storageCartItemsNumber();

  }

}
