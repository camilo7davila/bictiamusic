import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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

    getGeneros(){
      return this.http.get<any>(this.url+'/geners')
    }

    getGeneroDetalle(id:string){
      return this.http.get<any>(`${this.url}/search?type=2&id=${id}`)
    }

    getFavoritos(idFav:string){
      return this.http.get<any>(`${this.url}/addFavorite/${idFav}`)
      
    }

}
