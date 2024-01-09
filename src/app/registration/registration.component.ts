import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,  Validators } from '@angular/forms';
import { RegistrationService } from '../services/registration.service';
import { User } from '../model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit{
  user: User = new User();

 
  ngOnInit(): void {
      
  }
  constructor(private registrationService:RegistrationService, private router:Router){}
  registrationForm=new FormGroup({
    userName:new FormControl("",Validators.required),
    email:new FormControl(""),
    password:new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(10)]),
    firstName:new FormControl("", Validators.required),
    lastName:new FormControl("",Validators.required,),
    phoneNumber:new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(12),Validators.pattern("[0-9]*")])
  });

  onSubmit(){
    console.log("blaah");
    console.log(this.registrationForm.value);
    console.log(this.registrationForm.value);
   this.registrationService.registerUser(this.registrationForm.value).subscribe(
    (response:User)=>{
      console.log('User registered successfully:', response);
      this.user=response;
      alert('User successfully registered');
      this.router.navigate(['/login']);

    
    },
    (error)=>{
      console.log("error",error);
    }
   );
  }

  validateUserName()
  {
    let error=""
    if(this.registrationForm.get("userName")?.touched && this.registrationForm.get("userName")?.invalid)
    {
      if(this.registrationForm.get("userName")?.hasError('required'))
      {
        error="User name is required";
      }
    }
    return error;
  }
  validatePassword(){
    let error="";
    if(this.registrationForm.get("password")?.touched && this.registrationForm.get("password")?.invalid ){
       if(this.registrationForm.get("password")?.hasError('required')){
       error="Password is required";
       }else if(this.registrationForm.get("password")?.hasError('minlength')){
        error="Password can't be less than 6";
       }else if(this.registrationForm.get("password")?.hasError('maxlength')){
        error="Password can't be more than 10";
       }
    }
    return error;
   }
   validateFirstName() :String{
    let error="";
    if(this.registrationForm.get("firstName")?.touched && this.registrationForm.get("firstName")?.invalid){
     error="Firstname is required";
    }
    return error;
 }
 validateLastName() :String{
  let error="";
  if(this.registrationForm.get("lastName")?.touched && this.registrationForm.get("lastName")?.invalid){
   error="Lastname is required";
  }
  return error;
}
validatePhoneNumber(){
  let error="";
  if(this.registrationForm.get("phoneNumber")?.touched && this.registrationForm.get("phoneNumber")?.invalid ){
     if(this.registrationForm.get("phoneNumber")?.hasError('required')){
     error="phoneNumber is required";
     }else if(this.registrationForm.get("phoneNumber")?.hasError('minlength')){
      error="phoneNumber can't be less than 10";
     }else if(this.registrationForm.get("phoneNumber")?.hasError('maxlength')){
      error="phoneNumber can't be more than 12";
     }else if(this.registrationForm.get("phoneNumber")?.hasError('pattern')){
      error="Only 0-9 digits are allowed ";
     }

  }
  return error;
 }


  
}
