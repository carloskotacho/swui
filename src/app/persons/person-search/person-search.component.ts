import { Component, OnInit } from '@angular/core';

import { LazyLoadEvent } from 'primeng/components/common/api';

import { PersonService, PersonFilter } from './../person.service';

@Component({
  selector: 'app-person-search',
  templateUrl: './person-search.component.html',
  styleUrls: ['./person-search.component.css']
})
export class PersonSearchComponent implements OnInit {

  count = 0;
  persons = [];
  filter = new PersonFilter();

  constructor(
    private personService: PersonService
  ) {}

  ngOnInit() {

  }

  search(page = 0) {
    this.filter.page = page;

    this.personService.search(this.filter)
      .then(result => {
        this.count = result.count;
        this.persons = result.persons;
      });
  }

  whenChangingPages(event: LazyLoadEvent) {
    const page = event.first / event.rows;
    this.search(page);
  }

}

/*this.persons = [
  { name: 'Luke Skywalker', height: '172', mass: '77', hair_color: 'blond', skin_color: 'fair',
   eye_color: 'blue', birth_year: '19BBY', gender: 'male', homeworld: 'Tatooine' },
  { name: 'C-3PO', height: '167', mass: '75', hair_color: 'n/a', skin_color: 'gold',
   eye_color: 'yellow', birth_year: '112BBY', gender: 'n/a', homeworld: 'Tatooine' },
  { name: 'R2-D2', height: '96', mass: '32', hair_color: 'n/a', skin_color: 'white, blue',
   eye_color: 'red', birth_year: '33BBY', gender: 'n/a', homeworld: 'Naboo' },
  { name: 'Darth Vader', height: '202', mass: '136', hair_color: 'none', skin_color: 'white',
   eye_color: 'yellow', birth_year: '41.9BBY', gender: 'male', homeworld: 'Tatooine' },
  { name: 'Leia Organa', height: '150', mass: '49', hair_color: 'brown', skin_color: 'light',
   eye_color: 'brown', birth_year: '19BBY', gender: 'female', homeworld: 'Alderaan' }
  ];*/
