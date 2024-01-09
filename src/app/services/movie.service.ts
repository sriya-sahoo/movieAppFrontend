import { Injectable } from '@angular/core';
import { HttpClient ,  HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieResponse } from '../model/movie-response.model';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'http://localhost:8083';

  constructor(private http:HttpClient) { }
  getMovies(): Observable<MovieResponse[]> {
    return this.http.get<MovieResponse[]>(`${this.apiUrl}/movie/getmovie`);
  }
}
