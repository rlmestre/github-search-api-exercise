import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SearchService} from "../search-service/search.service";

@Component({
  selector: 'demo-search-type-menu',
  templateUrl: './search-type-menu.component.html',
  styleUrls: ['./search-type-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchTypeMenuComponent {
  queryParams$ = this.searchService.queryParams$;
  search = this.searchService.search;

  constructor(public searchService: SearchService) { }

  async changeType(type: string) {
    const { q } = await this.searchService.getQueryParams();
    this.searchService.changeQuery({ type, q });
  }
}
