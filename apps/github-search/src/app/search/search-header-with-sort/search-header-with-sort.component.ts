import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Sorting, sortOptions} from "../models/sorting.model";

@Component({
  selector: 'demo-search-header-with-sort',
  templateUrl: './search-header-with-sort.component.html',
  styleUrls: ['./search-header-with-sort.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchHeaderWithSortComponent implements OnInit {
  @Input() type = 'repositories';
  @Input() count = 0;

  sortOptions = sortOptions;
  sortBy: Sorting = sortOptions[this.type]['Best match'];
  noSort = (_a, _b) => 0;

  constructor(private router: Router) { }

  ngOnInit(): void {}

  changeSort(sorting: Sorting) {
    this.router.navigate(['search'], {
      queryParams: sorting,
      queryParamsHandling: "merge",
    });
  }
}
