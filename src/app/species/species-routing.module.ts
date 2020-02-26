import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SpecieSearchComponent } from './specie-search/specie-search.component';

const routes: Routes = [
  { path: '', component: SpecieSearchComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SpeciesRoutingModule { }
