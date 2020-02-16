import { Component, OnInit } from '@angular/core';

import { LazyLoadEvent } from 'primeng/components/common/api';

import { PersonService, PersonFilter } from './../person.service';

@Component({
  selector: 'app-person-search',
  templateUrl: './person-search.component.html',
  styleUrls: ['./person-search.component.css']
})
export class PersonSearchComponent implements OnInit {

  totalRecords = 0;
  persons = [];
  filter = new PersonFilter();

  constructor(
    private personService: PersonService
  ) {}

  ngOnInit() {}

  search(page = 0) {
    this.filter.page = page;

    this.personService.search(this.filter)
      .then(result => {
        this.totalRecords = result.count;
        this.persons = result.persons;
      });
  }

  whenChangingPages(event: LazyLoadEvent) {
    const page = event.first / event.rows;
    this.search(page);
  }

}
