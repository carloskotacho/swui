import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PersonService } from '../persons/person.service';
import { FilmService } from './../films/film.service';
import { StarshipService } from '../starships/starship.service';
import { VehicleService } from './../vehicles/vehicle.service';
import { SpecieService } from './../species/specie.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ],
  providers: [
    PersonService,
    FilmService,
    StarshipService,
    VehicleService,
    SpecieService
  ]
})
export class CoreModule { }
