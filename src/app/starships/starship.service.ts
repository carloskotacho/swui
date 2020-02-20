import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/toPromise';

export class StarshipFilter {
  search: string;
  page = 1;
  itemsForPage = 10;
}

@Injectable({
  providedIn: 'root'
})
export class StarshipService {

  starshipsUrl: string;

  constructor(private http: Http) {
    this.starshipsUrl = 'https://swapi.co/api/starships';
  }

  search(filter: StarshipFilter): Promise<any> {

    const params = new URLSearchParams();

    params.set('page', filter.page.toString());

    if (filter.search) {
      params.set('search', filter.search);
    }

    return this.http.get(this.starshipsUrl, { search: params })
      .toPromise()
      .then(response => response.json());
  }
}
