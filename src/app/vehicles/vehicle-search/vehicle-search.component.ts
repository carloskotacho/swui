import { Component, OnInit } from '@angular/core';

import { LazyLoadEvent } from 'primeng/components/common/api';

import { VehicleService, VehicleFilter } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-search',
  templateUrl: './vehicle-search.component.html',
  styleUrls: ['./vehicle-search.component.css']
})
export class VehicleSearchComponent implements OnInit {

  totalRecords = 0;
  filter = new VehicleFilter();
  vehicles = [];

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.search();
  }

  search(page = 1) {
    this.filter.page = page;

    this.vehicleService.search(this.filter)
      .then(vehicles => {
        this.totalRecords = vehicles.count;
        this.vehicles = vehicles.results;
      });
  }

  whenChangingPage(event: LazyLoadEvent) {
    const page = (event.first / event.rows) + 1;
    this.search(page);
  }
}
