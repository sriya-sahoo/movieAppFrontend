import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { response } from 'express';
import { error } from 'console';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  credentials={
    userName:'',
    password:''
  }
  constructor(private loginService:LoginService ){}
  ngOnInit(): void {
      
  }
  onSubmit()
  {
    console.log('Form is submitted');
    if((this.credentials.userName!='' && this.credentials.password!='')&&(this.credentials.userName!=null && this.credentials.password!=null)){
        console.log("submit the form to server");
        console.log("onsubmit"+this.credentials.password);
        console.log("credentials username "+ this.credentials.userName);
        console.log("cred"+ JSON.stringify(this.credentials));
        this.loginService.doLogin((this.credentials)).subscribe(
          response=>{
            console.log(response.token);
            this.loginService.loginUser(response.token);
            this.loginService.setUserName(this.credentials.userName);
            alert("User Logged In successfully");
            window.location.href="/dashboard"
          },
          error=>{
            console.log(error);
          }
        )
    }else{
      console.log("Fields are empty");
    }
  }

}
