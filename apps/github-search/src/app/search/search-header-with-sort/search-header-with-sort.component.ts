import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Sorting, sortOptions} from "../models/sorting.model";
import {SearchService} from "../search-service/search.service";

@Component({
  selector: 'demo-search-header-with-sort',
  templateUrl: './search-header-with-sort.component.html',
  styleUrls: ['./search-header-with-sort.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchHeaderWithSortComponent {
  @Input() type = 'repositories';
  @Input() count = 0;

  changeQuery = this.searchService.changeQuery.bind(this.searchService);

  sortOptions = sortOptions;
  sortBy: Sorting = sortOptions[this.type]['Best match'];
  noSort = (_a, _b) => 0;

  constructor(private searchService: SearchService) { }
}
