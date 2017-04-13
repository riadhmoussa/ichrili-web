import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { AppConfig } from '../app.config';
import { IUser } from '../models/index';

@Injectable()
export class UserService {
  constructor(private http: Http, private config: AppConfig) { }

  getAll() {
    return this.http.get(this.config.apiUrl + '/users', this.jwt()).map((response: Response) => response.json());
  }

  getById(_id: string) {
    return this.http.get(this.config.apiUrl + '/users/' + _id, this.jwt()).map((response: Response) => response.json());
  }

  create(user: IUser) {
    return this.http.post(this.config.apiUrl + '/users/register', user, this.jwt());
  }

  update(user: IUser) {
    return this.http.put(this.config.apiUrl + '/users/' + user.id, user, this.jwt());
  }

  delete(_id: string) {
    return this.http.delete(this.config.apiUrl + '/users/' + _id, this.jwt());
  }

  // private helper methods

  private jwt() {
    // create authorization header with jwt token
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      const headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
      console.log(headers);
      return new RequestOptions({ headers: headers });
    }
  }
}