import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { environment } from './../../environments/environment.prod';

export class PersonFilter {
  search: string;
  page = 0;
}

@Injectable()
export class PersonService {

  personsUrl: string;

  constructor(private http: Http) {
    this.personsUrl = `${environment.apiUrl}/people`;
  }

  search(filter: PersonFilter): Promise<any> {

    // const headers = new Headers();
    // headers.append('Content-Type', 'application/json');

    const params = new URLSearchParams();

    params.set('page', filter.page.toString());

    if (filter.search) {
      params.set('search', filter.search);
    }

    return this.http.get(`${this.personsUrl}`, { search: params })
      .toPromise()
      .then(response => {
        const responseJson = response.json();
        const persons = responseJson.results;

        const result = {
          persons,
          count: responseJson.count
        };

        return result;
      });

  }

}
