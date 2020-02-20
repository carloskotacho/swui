import { FormsModule } from '@angular/forms';
import { StarshipRoutingModule } from './starships-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/components/table/table';
import { TooltipModule } from 'primeng/tooltip';
import { ScrollPanelModule } from 'primeng/scrollpanel';

import { StarshipSearchComponent } from './starship-search/starship-search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    ScrollPanelModule,
    StarshipRoutingModule
  ],
  declarations: [
    StarshipSearchComponent
  ],
  exports: [
    StarshipSearchComponent
  ]
})
export class StarshipsModule { }
