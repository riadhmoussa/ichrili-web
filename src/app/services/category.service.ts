import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { AppConfig } from '../app.config';
import { ICategory } from '../models/icategory';

@Injectable()
export class CategoryService {
  constructor(private http: Http, private config: AppConfig) { }

  getAll() {
    return this.http.get(this.config.apiUrl + '/categories', this.jwt()).map((response: Response) => response.json());
  }

  getById(_id: string) {
    return this.http.get(this.config.apiUrl + '/categories/current/' + _id, this.jwt()).map((response: Response) => response.json());
  }

  create(category: ICategory) {
    return this.http.post(this.config.apiUrl + '/categories/add', category, this.jwt());
  }

  update(category: ICategory) {
    return this.http.put(this.config.apiUrl + '/categories/' + category.id, category, this.jwt());
  }

  delete(_id: string) {
    return this.http.delete(this.config.apiUrl + '/categories/' + _id, this.jwt());
  }

  // private helper methods

  private jwt() {
    // create authorization header with jwt token
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      const headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
      return new RequestOptions({ headers: headers });
    }
  }
}
