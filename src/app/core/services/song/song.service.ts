import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private http: HttpClient) { 
    
  }
  
  postSong(song: any) {
    const url = 'https://bictiamusic.herokuapp.com/song';
    let token = localStorage.getItem('token');
    const h = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    })
    console.log('posting')

    return this.http.post(url, song, {headers: h})
  }
}
