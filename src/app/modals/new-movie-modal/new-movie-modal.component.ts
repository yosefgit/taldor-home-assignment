import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-movie-modal',
  templateUrl: './new-movie-modal.component.html',
  styleUrls: ['./new-movie-modal.component.css']
})
export class NewMovieModalComponent implements OnInit {

    @Input() src;
    newMovieForm: FormGroup;
    categoryOptions;
    submitted = false;
    loading = false;

    constructor(
        public activeModal: NgbActiveModal,
        private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.newMovieForm = this.formBuilder.group({
            name: ['', [Validators.required, Validators.maxLength(30)]],
            category: ['', Validators.required],
            imdb_link: ['', Validators.required],
            poster_link: ['',Validators.required]
        })
        this.categoryOptions = ["Action", "Drama", "Comedy", "Other"];
    }

    get f (){
        return this.newMovieForm.controls;
    }

    onSubmit(){
        this.submitted = true;
    }

}
