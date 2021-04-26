import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'demo-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  title = 'github-search';
  search$ = null;
  sortBy = 'best-match';
  page = 1;
  type = 'repositories';

  // TODO: loading/empty states
  // TODO: search by users
  // TODO: user search result component(s)
  // TODO: repo search result component(s)
  // TODO: implement sorting
  // TODO: fix issue with numAbbr
  // TODO: implement simple caching
  // TODO: set colors for languages
  // TODO: maybe possibly filter by language? in repo search

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      const page = this.page = Number(params.get('page'))
      const type = this.type = params.get('type') ?? 'repositories';

      this.search$ = this.http.get(
        `https://api.github.com/search/${type}`,
        {
          params: {
            q: params.get('q'),
            page: String(page),
            per_page: '10',
            type
          }
        }
      );
    });
  }

  changePage(page: number) {
    this.router.navigate(['search'], {
      queryParams: { page },
      queryParamsHandling: "merge",
    });
  }

  changeType(type: string) {
    this.router.navigate(['search'], {
      queryParams: { type },
      queryParamsHandling: "merge",
    });
  }
}
