import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { FilmSearchComponent } from './film-search/film-search.component';

const routes: Routes = [
  { path: '', component: FilmSearchComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FilmsRoutingModule { }
