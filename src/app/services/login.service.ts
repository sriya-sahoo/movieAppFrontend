import { HttpClient ,  HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:8081";
  constructor(private http:HttpClient) { }
//calling server to generate toekn

  doLogin(credentials:any):Observable<any> 
  {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post<any>(`${this.url}/authentication/login`,credentials, { headers });
  }
  //for login user
  loginUser(token:string){
    sessionStorage.setItem('token',token);
    return true;
  }

  isLoggedIn(){
    let token =sessionStorage.getItem("token");
    if(token== undefined || token==='' || token== null)
    {
    return false;
    }
  else{
    return true;
  }
  }

  setUserName(userName:string)
  {
    sessionStorage.setItem('userName',userName);
  }

  logOut(){
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userName');
    return true;
  }

  getToken()
  {
    return sessionStorage.getItem("token");
  }

  getUserName()
  {
    return sessionStorage.getItem('userName');
  }
  
  
}
