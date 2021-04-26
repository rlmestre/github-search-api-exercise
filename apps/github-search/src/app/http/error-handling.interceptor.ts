import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class ErrorHandlingInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(error => {
        if (error instanceof HttpErrorResponse && error.status === 403) {
          const rate = error.headers.get('x-ratelimit-reset');
          // TODO: show blocking modal with throttling message
        }

        return of(error);
      })
    );
  }
}
