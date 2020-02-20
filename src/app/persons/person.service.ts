import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { environment } from './../../environments/environment';

export class PersonFilter {
  search: string;
  page = 1;
  itemsForPage = 10;
}

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  personsUrl: string;

  constructor(private http: Http) {
    this.personsUrl = `${environment.apiUrl}/people`;
  }

  search(filter: PersonFilter): Promise<any> {

    const params = new URLSearchParams();

    params.set('page', filter.page.toString());

    if (filter.search) {
      params.set('search', filter.search);
    }

    return this.http.get(this.personsUrl, { search: params })
      .toPromise()
      .then(response => response.json());
  }
}
