import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/interface/user.interfece';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUser(){
    const url = 'https://bictiamusic.herokuapp.com/user'
    return this.http.get(url)
  }

  createUser(user: User){
    const url = 'https://bictiamusic.herokuapp.com/user'
    return this.http.post(url, user)
  }

  
}
