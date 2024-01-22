import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { TUserDataRaw, TUserReposRaw } from '../models/userData';
@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private userData: TUserDataRaw | any;
  private userRepoData: TUserReposRaw | any;

  constructor(private http: HttpClient) {}

  getUser(): Observable<TUserDataRaw> {
    this.userData = this.http.get<TUserDataRaw>(
      'https://api.github.com/users/luizth25'
    );

    return this.userData;
  }

  getUserRepo(): Observable<TUserReposRaw[]> {
    this.userRepoData = this.http.get<TUserReposRaw[]>(
      'https://api.github.com/users/luizth25/repos'
    );

    return this.userRepoData;
  }
}
