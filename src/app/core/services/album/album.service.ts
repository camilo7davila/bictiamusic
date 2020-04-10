import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(
    private http: HttpClient
  ) { }

  private url = 'https://bictiamusic.herokuapp.com'

  getAlbums() {
    return this.http.get<any>(this.url+'/album')
  }
}
