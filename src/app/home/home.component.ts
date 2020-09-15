import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@app/core/services/authentication.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { MovieService } from '@app/core/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    username  = '';
    movies = [];
    categories = [];

    constructor(
        private authService: AuthenticationService, 
        private router: Router, 
        private moviesService: MovieService) 
    { }

    ngOnInit(): void {
        this.username = this.authService.currentUserValue.user;
        this.moviesService.getMovies().pipe(first()).subscribe(movies => {
            movies = movies;
        })
        this.moviesService.getMoviesCategories().pipe(first()).subscribe(categories => {
            categories = categories;
        })
    }

    logout(){
        this.authService.logout();
        this.router.navigate(['/login'])
    }
}
