import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzPageHeaderModule} from "ng-zorro-antd/page-header";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzTagModule} from "ng-zorro-antd/tag";
import {NzBadgeModule} from "ng-zorro-antd/badge";
import {NzPaginationModule} from "ng-zorro-antd/pagination";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzResultModule} from "ng-zorro-antd/result";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzImageModule} from "ng-zorro-antd/image";

import {SearchRoutingModule} from "./search-routing.module";
import {SearchComponent} from "./search.component";
import {SearchTypeMenuComponent} from './search-type-menu/search-type-menu.component';
import {SearchHeaderWithSortComponent} from './search-header-with-sort/search-header-with-sort.component';
import {NumAbbrPipeModule} from "../utils/NumAbbrPipe.pipe";
import {NzAlertModule} from "ng-zorro-antd/alert";
import {NzAffixModule} from "ng-zorro-antd/affix";

@NgModule({
  declarations: [SearchComponent, SearchTypeMenuComponent, SearchHeaderWithSortComponent],
  imports: [
    CommonModule,
    FormsModule,
    SearchRoutingModule,
    NumAbbrPipeModule,
    NzLayoutModule,
    NzPageHeaderModule,
    NzSelectModule,
    NzCardModule,
    NzTagModule,
    NzBadgeModule,
    NzPaginationModule,
    NzMenuModule,
    NzResultModule,
    NzIconModule,
    NzButtonModule,
    NzInputModule,
    NzImageModule,
    NzAlertModule,
    NzAffixModule,
  ],
})
export class SearchModule {}
