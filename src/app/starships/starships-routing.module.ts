import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { StarshipSearchComponent } from './starship-search/starship-search.component';

const routes: Routes = [
  { path: 'starships', component: StarshipSearchComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class StarshipRoutingModule { }
