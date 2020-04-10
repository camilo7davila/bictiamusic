import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private url = 'https://bictiamusic.herokuapp.com/album';
  private authorId = localStorage.getItem('id');

  constructor(
    private http: HttpClient
  ) { }


  getAlbums() {
    return this.http.get<any>(this.url);
  }

  getAlbumByAuthor() {
    return this.http.get<any>(this.url + '/listbyauthor/' + this.authorId);
  }

  postAlbum(album: any) {
    return this.http.post(this.url, album);
  }
}
