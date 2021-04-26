import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from "rxjs/operators";
import {SearchService} from "../search/search-service/search.service";

@Injectable({providedIn: 'root'})
export class ErrorHandlingInterceptor implements HttpInterceptor {
  constructor(private searchService: SearchService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(error => {
        if (error instanceof HttpErrorResponse && error.status === 403) {
          this.searchService.error = 'GitHub API rate limit reached. Try again in a minute.'
        } else {
          this.searchService.error = 'Try again later. You can still see your previous search if available.';
        }

        return of(error);
      })
    );
  }
}
