import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PersonSearchComponent } from './person-search/person-search.component';

const routes: Routes = [
  { path: '', component: PersonSearchComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PersonsRoutingModule { }
