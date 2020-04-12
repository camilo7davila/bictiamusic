import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenresService {
  private url = 'https://bictiamusic.herokuapp.com/geners';

  constructor(private http: HttpClient) { }

  getGenres() {
    return this.http.get<any>(this.url);
  }

}