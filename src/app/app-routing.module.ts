import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PageNotFoundComponent } from './core/page-not-found.component';

const routes: Routes = [
  { path: 'films', loadChildren: './films/films.module#FilmsModule' },
  { path: 'people', loadChildren: './persons/persons.module#PersonsModule' },
  { path: 'planets', loadChildren: './planets/planets.module#PlanetsModule' },
  { path: 'species', loadChildren: './species/species.module#SpeciesModule' },
  { path: 'starships', loadChildren: './starships/starships.module#StarshipsModule' },
  { path: 'vehicles', loadChildren: './vehicles/vehicles.module#VehiclesModule' },

  { path: '', redirectTo: 'people', pathMatch: 'full' },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'page-not-found' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
