import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private apiUrl = 'http://localhost:8082/user/register';

  constructor(private http: HttpClient) { }
  registerUser(user: any): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }
}
