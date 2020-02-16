import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/components/table/table';
import { TooltipModule } from 'primeng/tooltip';

import { PersonSearchComponent } from './person-search/person-search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule
  ],
  declarations: [
    PersonSearchComponent
  ],
  exports: [
    PersonSearchComponent
  ]
})
export class PersonsModule { }
