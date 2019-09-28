import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router, NavigationEnd, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { SignService } from 'src/app/services/sign.service';
import { Categories, Products } from 'src/app/values';
@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css']
})
export class BoutiqueComponent implements OnInit {

  Categories=Categories;
  Products = Products;
  
  ProductsToShow=[]; 

CurrentCategory : string;
paramsSubscription: Subscription;
  routeHasCategory=false;
  CurrentCategoryCount: any;
  CategoryToShow= [];
  authed: boolean;
  storageCartItemsNumber: any;

constructor(
  private route: ActivatedRoute,private _signService: SignService,
  private router: Router,private _userService: UserService) { }


  ngOnInit() {

    
    this.paramsSubscription = this.route.queryParams
      .subscribe(
        (queryparams: Params) => {
          this.CurrentCategory = queryparams['category'];
          if(this.CurrentCategory&&this.CurrentCategory!=''){
          this.ProductsToShow=this.Products.filter(product=>product.category==this.CurrentCategory);    
          this.CategoryToShow=this.Categories.filter(category=>category.name==this.CurrentCategory);          
          this.routeHasCategory=true;
        }
          else{
          this.ProductsToShow=this.Products;
          this.routeHasCategory=false;
        }
        if(this.CategoryToShow.length>0)
          this.CurrentCategoryCount=this.CategoryToShow[0].count; 
          else
          this.CurrentCategoryCount = 0;

          this.authed=this._signService.isLoggedIn();
          this.storageCartItemsNumber=this._userService.storageCartItemsNumber();
  
        
      });
      

      console.log(this.CurrentCategory);      
       console.log('Products array',this.Products);
       console.log('ProductsToShow array',this.ProductsToShow);
       console.log(this.routeHasCategory); 
       console.log(this.CurrentCategoryCount);

     
       
       
    };



  }

  
    

  