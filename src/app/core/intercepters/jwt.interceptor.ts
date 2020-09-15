import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthenticationService } from '@app/core/services/authentication.service';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authService: AuthenticationService) {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
        const user = this.authService.currentUserValue

        if(user && user.token){
            request = request.clone({setHeaders: {Authorization: `Bearer ${user.token}`}})
        }

        return next.handle(request);
    }
}
