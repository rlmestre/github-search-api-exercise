import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {filter} from "rxjs/operators";

@Component({
  selector: 'demo-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  title = 'github-search';
  search$ = null;

  query = '';
  page = 1;
  type = 'repositories';

  // TODO: user search result component(s)
  // TODO: repo search result component(s)
  // TODO: fix issue with numAbbr
  // TODO: implement simple caching
  // TODO: set colors for languages
  // TODO: maybe possibly filter by language? in repo search

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParamMap.pipe(
      filter(params => !!params.get('q')),
    ).subscribe(params => {
      const q = this.query = params.get('q');
      this.page = Number(params.get('page'));
      const page = String(this.page);
      const type = this.type = params.get('type') ?? 'repositories';
      const sort = params.get('sort');
      const order = params.get('order');

      this.search$ = this.http.get(
        `https://api.github.com/search/${type}`,
        {
          params: {
            q, type, sort, order, page,
            per_page: '10',
          }
        }
      );
    });
  }

  changeQuery(query: string) {
    this.router.navigate(['search'], {
      queryParams: { q: query },
      queryParamsHandling: "merge",
    });
  }

  changePage(page: number) {
    this.router.navigate(['search'], {
      queryParams: { page },
      queryParamsHandling: "merge",
    });
  }
}
