import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/components/table/table';
import { TooltipModule } from 'primeng/tooltip';
import { ScrollPanelModule } from 'primeng/scrollpanel';

import { PlanetSearchComponent } from './planet-search/planet-search.component';
import { PlanetsRoutingModule } from './planets-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    ScrollPanelModule,
    PlanetsRoutingModule
  ],
  declarations: [
    PlanetSearchComponent
  ],
  exports: [
    PlanetSearchComponent
  ]
})
export class PlanetsModule { }
