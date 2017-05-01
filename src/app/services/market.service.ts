import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { AppConfig } from '../app.config';
import { IMarket } from '../models/imarket';



@Injectable()
export class MarketService {
constructor(private http: Http, private config: AppConfig) { }

  getAll() {
    return this.http.get(this.config.apiUrl + '/markets', this.jwt()).map((response: Response) => response.json());
  }

  getById(_id: string) {
    return this.http.get(this.config.apiUrl + '/markets/current/' + _id, this.jwt()).map((response: Response) => response.json());
  }

  create(market: IMarket) {
    return this.http.post(this.config.apiUrl + '/markets/add', market, this.jwt());
  }

  update(market: IMarket) {
    return this.http.put(this.config.apiUrl + '/markets/' + market._id, market, this.jwt());
  }

  delete(_id: string) {
    return this.http.delete(this.config.apiUrl + '/markets/' + _id, this.jwt());
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
