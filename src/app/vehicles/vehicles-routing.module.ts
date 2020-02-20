import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { VehicleSearchComponent } from './vehicle-search/vehicle-search.component';

const routes: Routes = [
  { path: 'vehicles', component: VehicleSearchComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class VehiclesRoutingModule { }
