import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistServiceService {

  private apiUrl='http://localhost:8084/wishlist/addwishlist';
  private apUrl='http://localhost:8084/wishlist';
  
 private token= sessionStorage.getItem('token');

 constructor(private http: HttpClient) { }
 addMovieToWishlist(movie:any): Observable<any> {
  var reqHeader = new HttpHeaders().set( 
    'Content-Type', 'application/json').set(
    'Authorization', 'Bearer ' + sessionStorage.getItem('token'));

  console.log(reqHeader);
   return this.http.post<any>(this.apiUrl,movie,{ headers: reqHeader });
 
}
viewWishlistedMovie(userName:string): Observable<any> {
  var reqHeader = new HttpHeaders().set( 
    'Content-Type', 'application/json').set(
    'Authorization', 'Bearer ' + sessionStorage.getItem('token'));
    const url = `${this.apUrl}/view/${userName}`
    return this.http.get<any>(url,{ headers: reqHeader });
}


removeFromWishlist(title: String, userName:string): Observable<any> {
  var reqHeader = new HttpHeaders().set( 
    'Content-Type', 'application/json').set(
    'Authorization', 'Bearer ' + sessionStorage.getItem('token'));
  const url = `${this.apUrl}/remove/${title}/${userName}`;
  return this.http.delete(url,{headers: reqHeader });
}
}