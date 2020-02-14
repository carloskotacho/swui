import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonSearchComponent } from './person-search/person-search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PersonSearchComponent
  ],
  exports: [
    PersonSearchComponent
  ]
})
export class PersonsModule { }
