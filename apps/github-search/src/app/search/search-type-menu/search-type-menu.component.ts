import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'demo-search-type-menu',
  templateUrl: './search-type-menu.component.html',
  styleUrls: ['./search-type-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchTypeMenuComponent implements OnInit {
  type = '';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.type = params.get('type') || 'repositories';
    });
  }

  changeType(type: string) {
    const q = this.route.snapshot.queryParamMap.get('q') ?? '';
    this.router.navigate(['search'], {
      queryParams: {type, q },
    });
  }
}
