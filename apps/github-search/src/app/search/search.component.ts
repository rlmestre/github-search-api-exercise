import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {scan} from "rxjs/operators";

type Sorting = { sort: string | null, order?: 'desc' | 'asc'};
const defaultSort: Sorting = { sort: null };

const sortOptions = {
  'repositories': {
    'Best match': defaultSort,
    'Most stars': { sort: 'stars', order: 'desc' },
    'Least stars': { sort: 'stars', order: 'asc' },
    'Most forks': { sort: 'forks', order: 'desc' },
    'Least forks': { sort: 'forks', order: 'asc' },
    'Recently updated': { sort: 'updated', order: 'desc' },
    'Least recently updated': { sort: 'updated', order: 'asc' },
  },
  'users': {
    'Best match': defaultSort,
    'Most followers': { sort: 'followers', order: 'desc' },
    'Least followers': { sort: 'followers', order: 'asc' },
    'Most recently joined': { sort: 'joined', order: 'desc' },
    'Least recently joined': { sort: 'joined', order: 'asc' },
    'Most repositories': { sort: 'repositories', order: 'desc' },
    'Least repositories': { sort: 'repositories', order: 'asc' },
  }
};

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
  sortBy: Sorting = sortOptions[this.type]['Best match'];
  sortOptions = sortOptions;
  noSort = (_a, _b) => 0;

  // TODO: loading/empty states
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
      this.query = params.get('q');
      const page = this.page = Number(params.get('page'))
      const type = this.type = params.get('type') ?? 'repositories';

      this.sortBy ??= this.sortOptions[type]['Best match'];

      this.search$ = this.http.get(
        `https://api.github.com/search/${type}`,
        {
          params: {
            q: this.query,
            page: String(page),
            per_page: '10',
            type,
            sort: this.sortBy.sort ?? '',
            order: this.sortBy.order ?? '',
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

  changeSort(sorting: Sorting) {
    this.router.navigate(['search'], {
      queryParams: sorting,
      queryParamsHandling: "merge",
    });
  }
}
