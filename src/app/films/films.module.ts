import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/components/table/table';
import { TooltipModule } from 'primeng/tooltip';

import { FilmSearchComponent } from './film-search/film-search.component';
import { FilmsRoutingModule } from './films-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    FilmsRoutingModule
  ],
  declarations: [
    FilmSearchComponent
  ],
  exports: [
    FilmSearchComponent
  ]
})
export class FilmsModule { }
