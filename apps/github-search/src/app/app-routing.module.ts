import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";

const routes: Route[] = [
  { path: 'search',
    loadChildren: () => import('./search/search.module')
      .then(m => m.SearchModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
