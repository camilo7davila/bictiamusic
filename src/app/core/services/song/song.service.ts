import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  private url = 'https://bictiamusic.herokuapp.com'

  getSong() {
    return this.http.get<any>(this.url + '/song')
  }

  getGeneros() {
    return this.http.get<any>(this.url + '/geners')
  }

  getGeneroDetalle(id: string) {
    return this.http.get<any>(`${this.url}/search?type=2&id=${id}`)
  }

  getFavoritoDetalle(id:string){
    return this.http.get<any>(`${this.url}/search?type=3&id=${id}`)
  }

  postSong(song: any) {
    const url = 'https://bictiamusic.herokuapp.com/song';
    let token = localStorage.getItem('token');

    const h = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    })
    console.log('posting', h)

    return this.http.post(url, song, { headers: h })

  }

  patchFavoritos(idUser: string, idSong:string) {

    let token = localStorage.getItem('token');

    const h = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    })
    console.log('AddFavoritos', h)

    return this.http.patch<any>(`${this.url}/user/addFavorite/${idUser}`, { "favSong" : idSong } ,{ headers: h })
  }

  removeFavoritos(idUser: string, idSong:string) {

    let token = localStorage.getItem('token');

    const h = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    })
    console.log('Remove')

    return this.http.patch<any>(`${this.url}/user/removeFavorite/${idUser}`, { "favSong" : idSong } ,{ headers: h })
  }

  getArtistas(){
    return this.http.get<any>(`${this.url}/user/artist`)
  }

  getFavoritos(id:string){
    return this.http.get<any>(`${this.url}/user/userbyid/${id}`)
  }



}
