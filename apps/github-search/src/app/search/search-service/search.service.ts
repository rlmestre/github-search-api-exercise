import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

import {BehaviorSubject} from "rxjs";
import {
  catchError,
  distinctUntilChanged,
  filter,
  map,
  scan,
  shareReplay,
  take,
  tap
} from "rxjs/operators";

import {SearchParameters} from "../models/search.model";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  error = '';

  queryParams$ = this.route.queryParamMap.pipe(
    filter(paramMap => !!paramMap.get('q')), // Ignore empty query to prevent errors
    map(paramMap => this.extractKeys(paramMap)), // Map to plain object
    distinctUntilChanged((prev, curr) =>
      // Really basic object comparison to prevent repeat emits when params haven't changed.
      JSON.stringify(prev) === JSON.stringify(curr)), // Normally I'd reach for lodash
    tap(params => this.setSearches(params)),
    shareReplay(), // Share among components
  );

  private _search = {
    'repositories': new BehaviorSubject(null),
    'users': new BehaviorSubject(null),
  }

  search = {
    'repositories': this._search.repositories.asObservable().pipe(
      // Fall back to previous emission on error.
      scan((prev, next) => next ?? prev)
    ),
    'users': this._search.users.asObservable().pipe(
      // Fall back to previous emission on error.
      scan((prev, next) => next ?? prev)
    ),
  }

  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              private router: Router) {}

  // Map QueryParamMap to plain object for external availability.
  private extractKeys(paramMap: ParamMap): any {
    let extractedParams = {
      q: '',
      type: 'repositories',
      sort: '',
      order: '',
      page: '',
    };

    for (let key of paramMap.keys) {
      extractedParams[key] = paramMap.get(key);
    }

    return extractedParams;
  }

  // Map HttpClient responses to BehaviorSubjects for reuse since
  // HttpClient methods complete after one emit.
  private setSearches(params: any) {
    const { q, page, sort, order } = params;

    for (let type in this.search) {
      this.http.get(
        `https://api.github.com/search/${type}`,
        {
          params: {
            q, page, sort, order,
            per_page: '10',
          }
        }
      ).pipe(
        // Return null on error so scan operator on the observables above
        // can fall back to the previous emission.
        catchError(() => null),
      ).subscribe(response => this._search[type].next(response));
    }
  }

  // In lieu of lastValueFrom 😬
  getQueryParams() {
    return this.queryParams$.pipe(take(1)).toPromise();
  }

  // Merge queryParams only when `q` doesn't change.
  changeQuery(newParams: SearchParameters) {
    const queryParamsHandling = ('q' in newParams) ? '' : 'merge';

    this.router.navigate(['search'], {
      queryParams: { ...newParams },
      queryParamsHandling
    });
  }
}
