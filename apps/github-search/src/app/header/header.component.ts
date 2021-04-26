import {Component, OnInit, NgModule, HostListener, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzAffixModule} from "ng-zorro-antd/affix";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzIconModule} from "ng-zorro-antd/icon";
import {SearchService} from "../search/search-service/search.service";

@Component({
  selector: 'demo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('searchField') searchField;
  searchQ = '';
  changeQuery = this.searchService.changeQuery.bind(this.searchService);

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchService.queryParams$.subscribe(params => this.searchQ = params['q']);
  }

  @HostListener('document:keydown./', ['$event'])
  focusSearchKeyboardShortcut(event: KeyboardEvent) {
    if (document.activeElement != this.searchField.nativeElement) {
      this.searchField.nativeElement.focus();
      event.preventDefault();
    }
  }
}

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    NzAffixModule,
    NzInputModule,
    NzIconModule,
    FormsModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule {
}
