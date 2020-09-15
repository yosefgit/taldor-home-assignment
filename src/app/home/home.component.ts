import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@app/core/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    username  = '';

    constructor(private authService: AuthenticationService, private router: Router) { }

    ngOnInit(): void {
        this.username = this.authService.currentUserValue.user;
    }

    logout(){
        this.authService.logout();
        this.router.navigate(['/login'])
    }
}
