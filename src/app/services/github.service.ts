import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { TUserData, TUserDataRaw } from '../models/userData';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private userData: TUserDataRaw | any;

  constructor(private http: HttpClient) {}
  getUser(): Observable<TUserDataRaw> {
    this.userData = this.http.get<TUserDataRaw>(
      'https://api.github.com/users/luizth25'
    );

    return this.userData;
  }
}
