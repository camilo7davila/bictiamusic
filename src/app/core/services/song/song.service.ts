import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(
    private router:Router,
    private http:HttpClient
    ) { }

    private url = 'https://bictiamusic.herokuapp.com'

    getSong(){
      return this.http.get<any>(this.url+'/song')
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
