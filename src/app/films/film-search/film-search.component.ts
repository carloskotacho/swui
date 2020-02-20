import { Component, OnInit } from '@angular/core';

import { LazyLoadEvent } from 'primeng/components/common/api';

import { FilmService, FilmFilter } from '../film.service';

@Component({
  selector: 'app-film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.css']
})
export class FilmSearchComponent implements OnInit {

  totalRecords = 0;
  filter = new FilmFilter();
  films = [];

  constructor(private filmServise: FilmService) { }

  ngOnInit() {
    this.search();
  }

  search(page = 1) {
    this.filter.page = page;

    this.filmServise.search(this.filter)
      .then(films => {
        this.totalRecords = films.count;
        this.films = films.results;
      });
  }

  whenChangingPage(event: LazyLoadEvent) {
    const page = (event.first / event.rows) + 1;
    this.search(page);
  }

}
