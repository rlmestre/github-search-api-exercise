import {Component, OnInit, NgModule, HostListener, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, Router} from "@angular/router";
import {FormsModule} from "@angular/forms";

import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzAffixModule} from "ng-zorro-antd/affix";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzIconModule} from "ng-zorro-antd/icon";

@Component({
  selector: 'demo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('searchField') searchField;
  searchQ = '';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => this.searchQ = params.get('q'));
  }

  @HostListener('document:keydown./', ['$event'])
  focusSearchKeyboardShortcut(event: KeyboardEvent) {
    if (document.activeElement != this.searchField.nativeElement) {
      this.searchField.nativeElement.focus();
      event.preventDefault();
    }
  }

  setSearchQuery(q: string) {
    console.log(q);
    if (q) {
      this.router.navigate(['search'], {
        queryParams: { q },
      });
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
