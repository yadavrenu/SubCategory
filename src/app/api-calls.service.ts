import { Injectable } from '@angular/core';
import { Observable } from '../../node_modules/rxjs';
import { HttpClient } from '@angular/common/http';
// import { HttpHeaders } from '../../node_modules/@angular/common/http';


@Injectable()
export class ApiCallsService {

  url = 'http://localhost/CakePHP/cakephp/';

  getAllCategories(): Observable<any> {
    return this.http.get(this.url + 'allCategories');
  }

  getAllItemsAndParents(): Observable<any> {
    return this.http.get(this.url + 'allItems');
  }

  getSelectedItems(category): Observable<any> {
    return this.http.get(this.url + 'selectedCategory/' + category);
  }

  constructor(private http: HttpClient) { }
}
