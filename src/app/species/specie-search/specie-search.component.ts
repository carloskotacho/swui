import { Component, OnInit } from '@angular/core';

import { LazyLoadEvent } from 'primeng/components/common/api';

import { SpecieFilter, SpecieService } from './../specie.service';

@Component({
  selector: 'app-specie-search',
  templateUrl: './specie-search.component.html',
  styleUrls: ['./specie-search.component.css']
})
export class SpecieSearchComponent implements OnInit {

  totalRecords = 0;
  filter = new SpecieFilter();
  species = [];

  constructor(private specieService: SpecieService) { }

  ngOnInit() {
    this.search();
  }

  search(page = 1) {
    this.filter.page = page;

    this.specieService.search(this.filter)
      .then(species => {
        this.totalRecords = species.count;
        this.species = species.results;
      });
  }

  whenChangingPage(event: LazyLoadEvent) {
    const page = (event.first / event.rows) + 1;
    this.search(page);
  }
}
