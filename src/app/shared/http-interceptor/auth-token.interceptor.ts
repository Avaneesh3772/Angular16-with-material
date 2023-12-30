import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, finalize, Observable, retry, throwError } from 'rxjs';
import { AuthTokenService } from '../services/auth-token.service';


@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  constructor(private authTokenService : AuthTokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const reqestWithAuthToken = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authTokenService.getTokenToSessionStorage('token')}`
      }
    });
    
    return next.handle(reqestWithAuthToken).pipe(
        // Retry on failure
        retry(2),

        // Handle errors
        catchError((error: HttpErrorResponse) => {
          // TODO: Add error handling logic here
          alert(`HTTP Error: ${error.message}`);
          console.log('error', error);
          return throwError(error);
        }),

        // PROFILING
        finalize(() => {
          console.log('request', request);
          const profilingMsg = `${request.method} "${request.urlWithParams}"`;          
        })
    );
  }
}
