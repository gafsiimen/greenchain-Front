import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { SignService } from 'src/app/services/sign.service';
import { apiUrl } from 'src/app/values';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  selectedFile: File = null;
  user=null;
  URL = apiUrl.slice(0, apiUrl.length - 4);
  myreflink: any;
  myForm:NgForm;
  pendingCoach=false;

  constructor(private userService: UserService, private signService: SignService,
    private router: Router) { 
      this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;}
      }
  ngOnInit() {

    this.signService.getMe()
      .subscribe(
        data => {
          this.user = data.data;
          if ((this.user.role=='coach') && (this.user.confirmed==0)) this.pendingCoach=true;
          console.log("profile: ", this.user)

        }
      );

    this.userService.getMyRefLink().subscribe(data => {
      this.myreflink = data.data;
      console.log(this.myreflink);
    });


  }


  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    console.log('file=', this.selectedFile)
  }

  onUpload() {
     const fd = new FormData();
     if (this.selectedFile)
     fd.append('image', this.selectedFile);     
     if (this.user.firstname)
     fd.append('firstname',this.user.firstname);
     if (this.user.lastname)
     fd.append('lastname',this.user.lastname);
     if (this.user.tel)
     fd.append('tel',this.user.tel);
     if (this.user.addresses[0].primary_address)
     fd.append('primary_address',this.user.addresses[0].primary_address);
     if (this.user.addresses[0].additional_address)
     fd.append('additional_address',this.user.addresses[0].additional_address);
     if (this.user.addresses[0].zip)
     fd.append('zip',this.user.addresses[0].zip);
     console.log('fd',fd)
    this.userService.updateProfile(fd).subscribe(data => {

       console.log('profileUpdate result =', data);
       this.router.navigated = false;
     this.router.navigate([this.router.url]);
     });
    
     
  }




  isValid(form:NgForm){  
    console.log(form);
    console.log(form.form.status=="VALID");
    return form.form.status=="VALID" ;
  }


  
}
