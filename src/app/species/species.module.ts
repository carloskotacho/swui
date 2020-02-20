import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/components/table/table';
import { TooltipModule } from 'primeng/tooltip';
import { ScrollPanelModule } from 'primeng/scrollpanel';

import { SpecieSearchComponent } from './specie-search/specie-search.component';
import { SpeciesRoutingModule } from './species-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    ScrollPanelModule,
    SpeciesRoutingModule
  ],
  declarations: [
    SpecieSearchComponent
  ],
  exports: [
    SpecieSearchComponent
  ]
})
export class SpeciesModule { }
