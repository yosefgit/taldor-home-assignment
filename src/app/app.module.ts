import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        MovieCardComponent
    ],
    providers: [

    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
