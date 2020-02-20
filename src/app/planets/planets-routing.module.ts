import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PlanetSearchComponent } from './planet-search/planet-search.component';

const routes: Routes = [
  { path: 'planets', component: PlanetSearchComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PlanetsRoutingModule { }
