import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

    @Input() movie;
    @Output()onDeleteEvent: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    deleteMovie(id){
        this.onDeleteEvent.emit(id);
    }

    redirect(link){
        location.href = link;
    }
}
