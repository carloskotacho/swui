import { Component, OnInit } from '@angular/core';

import { LazyLoadEvent } from 'primeng/components/common/api';

import { PlanetService, PlanetFilter } from '../planet.service';

@Component({
  selector: 'app-planet-search',
  templateUrl: './planet-search.component.html',
  styleUrls: ['./planet-search.component.css']
})
export class PlanetSearchComponent implements OnInit {

  totalRecords = 0;
  filter = new PlanetFilter();
  planets = [];

  constructor(private planetService: PlanetService) { }

  ngOnInit() {
    this.search();
  }

  search(page = 1) {
    this.filter.page = page;

    this.planetService.search(this.filter)
      .then(planets => {
        this.totalRecords = planets.count;
        this.planets = planets.results;
      });
  }

  whenChangingPage(event: LazyLoadEvent) {
    const page = (event.first / event.rows) + 1;
    this.search(page);
  }
}
