import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@app/core/services/authentication.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { MovieService } from '@app/core/services/movie.service';
import { NewMovieModalComponent } from '@app/modals/new-movie-modal/new-movie-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    username  = '';
    movies;
    categories;
    selectedCategory;

    constructor(
        private authService: AuthenticationService, 
        private router: Router, 
        private moviesService: MovieService,
        private modalService: NgbModal) 
    { }

    ngOnInit(): void {
        this.username = this.authService.currentUserValue.user;
        this.moviesService.getMovies().pipe(first()).subscribe(data => {
            this.movies = data;
        })
        this.moviesService.getMoviesCategories().pipe(first()).subscribe(data => {
            this.categories = data;
        })
    }

    addMovie(){

    }

    deleteMovie(id){
        this.moviesService.deleteMovie(id).pipe(first()).subscribe(response => {
            this.movies = this.movies.filter(movie => movie.id !== id);
        }, error => {
            console.log(error)
        })
    }

    openNewMovieModal(link){
        const modalRef = this.modalService.open(NewMovieModalComponent);
        modalRef.componentInstance.src = link;
    }

    logout(){
        this.authService.logout();
        this.router.navigate(['/login'])
    }
}
