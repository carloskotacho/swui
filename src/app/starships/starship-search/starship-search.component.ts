import { Component, OnInit } from '@angular/core';

import { LazyLoadEvent } from 'primeng/components/common/api';

import { StarshipFilter, StarshipService } from '../starship.service';

@Component({
  selector: 'app-starship-search',
  templateUrl: './starship-search.component.html',
  styleUrls: ['./starship-search.component.css']
})
export class StarshipSearchComponent implements OnInit {

  totalRecords = 0;
  filter = new StarshipFilter();
  starships = [];

  constructor(private starshipService: StarshipService) { }

  ngOnInit() {
    this.search();
  }

  search(page = 1) {
    this.filter.page = page;

    this.starshipService.search(this.filter)
      .then(starships => {
        this.totalRecords = starships.count;
        this.starships = starships.results;
      });
  }

  whenChangingPage(event: LazyLoadEvent) {
    const page = (event.first / event.rows) + 1;
    this.search(page);
  }
}
