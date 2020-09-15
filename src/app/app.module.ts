import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { JwtInterceptor } from '@app/core/intercepters/jwt.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewMovieModalComponent } from './modals/new-movie-modal/new-movie-modal.component';
import { FilterPipe } from './core/pipes/filter.pipe';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgbModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        MovieCardComponent,
        NewMovieModalComponent,
        FilterPipe
    ],
    entryComponents: [
        NewMovieModalComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
