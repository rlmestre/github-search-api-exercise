import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {SearchComponent} from "./search.component";

const routes: Route[] = [
  {
    path: '**', component: SearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchRoutingModule {}
