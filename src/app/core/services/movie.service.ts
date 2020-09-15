import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies(){
      return this.http.get(`${environment.apiUrl}/api/movies`);
  }

  addMovie(movie){
      return this.http.post(`${environment.apiUrl}/api/movie`, movie);
  }

  deleteMovie(id){
      return this.http.delete(`${environment.apiUrl}/api/movie/${id}`);
  }

  getMoviesCategories(){
      return this.http.get(`${environment.apiUrl}/api/categories`);
  }

}
