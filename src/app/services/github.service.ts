import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { TUserDataRaw, TUserReposRaw } from '../models/userData';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private userData: TUserDataRaw | any;
  private userDataRepo: TUserReposRaw | any;

  constructor(private http: HttpClient) {}

  getUser(): Observable<TUserDataRaw> {
    this.userData = this.http.get<TUserDataRaw>(
      'https://api.github.com/users/luizth25'
    );

    return this.userData;
  }

  getUserRepo(): Observable<TUserReposRaw[]> {
    this.userDataRepo = this.http.get<TUserReposRaw[]>(
      'https://api.github.com/users/luizth25/repos'
    );

    return this.userDataRepo;
  }
}
