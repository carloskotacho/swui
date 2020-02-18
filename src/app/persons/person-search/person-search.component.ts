import { Component, OnInit } from '@angular/core';

import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-search',
  templateUrl: './person-search.component.html',
  styleUrls: ['./person-search.component.css']
})
export class PersonSearchComponent implements OnInit {

  persons = [];

  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.search();
  }

  search() {
    this.personService.search()
      .then(persons => {
        this.persons = persons;
      });
  }
}
