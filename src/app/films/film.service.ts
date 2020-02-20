import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/toPromise';

export class FilmFilter {
  search: string;
  page = 1;
  itemsForPage = 10;
}

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  filmsUrl: string;

  constructor(private http: Http) {
    this.filmsUrl = 'https://swapi.co/api/films';
  }

  search(filter: FilmFilter): Promise<any> {

    const params = new URLSearchParams();

    params.set('page', filter.page.toString());

    if (filter.search) {
      params.set('search', filter.search);
    }

    return this.http.get(this.filmsUrl, { search: params })
      .toPromise()
      .then(response => response.json());
  }
}
