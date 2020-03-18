import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getDiscoverFilms(){
    const url = 'https://bictiamusic.herokuapp.com/user'
    return this.http.get(url)
  }
}
