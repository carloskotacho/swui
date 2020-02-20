import { VehiclesRoutingModule } from './vehicles-routing.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/components/table/table';
import { TooltipModule } from 'primeng/tooltip';
import { ScrollPanelModule } from 'primeng/scrollpanel';

import { VehicleSearchComponent } from './vehicle-search/vehicle-search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    ScrollPanelModule,
    VehiclesRoutingModule
  ],
  declarations: [
    VehicleSearchComponent
  ],
  exports: [
    VehicleSearchComponent
  ]
})
export class VehiclesModule { }
