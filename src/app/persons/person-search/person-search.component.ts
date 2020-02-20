import { Component, OnInit } from '@angular/core';

import { LazyLoadEvent } from 'primeng/components/common/api';

import { PersonService, PersonFilter } from '../person.service';

@Component({
  selector: 'app-person-search',
  templateUrl: './person-search.component.html',
  styleUrls: ['./person-search.component.css']
})
export class PersonSearchComponent implements OnInit {

  totalRecords = 0;
  filter = new PersonFilter();
  persons = [];

  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.search();
  }

  search(page = 1) {
    this.filter.page = page;

    this.personService.search(this.filter)
      .then(persons => {
        this.totalRecords = persons.count;
        this.persons = persons.results;
      });
  }

  whenChangingPage(event: LazyLoadEvent) {
    const page = (event.first / event.rows) + 1;
    this.search(page);
  }
}
