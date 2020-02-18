import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: Http) {}

  search(): Promise<any> {
    return this.http.get('http://localhost:3000/people')
      .toPromise()
      .then(response => response.json());
  }
}
