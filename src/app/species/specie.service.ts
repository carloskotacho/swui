import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/toPromise';

export class SpecieFilter {
  search: string;
  page = 1;
  itemsForPage = 10;
}

@Injectable({
  providedIn: 'root'
})
export class SpecieService {

  speciesUrl: string;

  constructor(private http: Http) {
    this.speciesUrl = 'https://swapi.co/api/species';
  }

  search(filter: SpecieFilter): Promise<any> {

    const params = new URLSearchParams();

    params.set('page', filter.page.toString());

    if (filter.search) {
      params.set('search', filter.search);
    }

    return this.http.get(this.speciesUrl, { search: params })
      .toPromise()
      .then(response => response.json());
  }
}
