import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {filter, map, share, shareReplay, take, tap} from "rxjs/operators";
import {SearchParameters} from "../models/search.model";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  queryParams$;
  search = {
    'repositories': null,
    'users': null,
  }

  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              private router: Router) {
    this.queryParams$ = this.route.queryParamMap.pipe(
      filter(paramMap => !!paramMap.get('q')),
      map(paramMap => this.extractKeys(paramMap)),
      tap(params => this.setSearches(params)),
    );
  }

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

  private setSearches(params: any) {
    const { q, page, sort, order } = params;

    for (let type in this.search) {
      this.search[type] = this.http.get(
        `https://api.github.com/search/${type}`,
        {
          params: { q, page, sort, order }
        }
      ).pipe(
        shareReplay(),
      );
    }
  }

  // In lieu of lastValueFrom 😬
  getQueryParams() {
    return this.queryParams$.pipe(take(1)).toPromise();
  }

  changeQuery(newParams: SearchParameters) {
    const queryParamsHandling = ('q' in newParams) ? '' : 'merge';

    this.router.navigate(['search'], {
      queryParams: { ...newParams },
      queryParamsHandling
    });
  }
}
