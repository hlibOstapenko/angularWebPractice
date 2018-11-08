import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class UsersService {

  size = 8;

  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get('https://randomuser.me/api/?inc=gender,name,picture,location&results='+this.size+'&nat=gb﻿')
      .pipe(map(function (res) {
        return res.results;
      }))
      .pipe(map(users => {
        return users.map(u => {
          return {
           name: u.name.first + ' ' + u.name.last,
           image: u.picture.large,
            geo: u.location.city + ' ' + u.location.state + ' ' + u.location.street

        };
        });
      }))
      ;
  }

  setSize(size) {
    this.size = size;
  }
}
