import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  isLoginMode=true;
  error;
     onSwitchMode(){
     this.isLoginMode=!this.isLoginMode;

   }

     onSubmit(form:NgForm)
   { 
    //  console.log(form.value);
    //  const email=form.value.email;
    //  const pwd=form.value.password;
    //  this.auth.signup(email,pwd).subscribe(resData=>{
    //    console.log(resData);
    //  },errorMessage=>{
    //    console.log(errorMessage);
    //    this.error=errorMessage;
       
       
    //  });
     form.reset();
   }


}