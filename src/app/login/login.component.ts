import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '@app/core/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    loading = false;
    submitted = false;
    error = '';

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute, 
        private router: Router, 
        private authService: AuthenticationService
    ) {}
    
    get f(){
        return this.loginForm.controls;
    }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        })
    }


    onSubmit(){
        this.submitted = true;

        if(this.loginForm.invalid){
            return
        }

        this.loading = true;  
        this.authService.login(this.f.username.value, this.f.password.value)
                        .pipe(first())
                        .subscribe(data => {
                                this.router.navigate(['/secure'])
                            }, error => {
                                this.error = error.error;
                                this.loading = false;
                            })
    }

}
