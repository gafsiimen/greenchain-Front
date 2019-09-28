import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignService } from 'src/app/services/sign.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {



  constructor(private signService:SignService) { }

  ngOnInit() {


  }





  isValid(form:NgForm){  
    console.log(form);    
    return form.form.status=="VALID" ;
  }


}
