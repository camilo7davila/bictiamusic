import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/interface/user.interfece';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://bictiamusic.herokuapp.com'

  constructor(private http: HttpClient) { }

  getUser(){
    return this.http.get(this.url+'/user')
  }

  createUser(user: User){
    return this.http.post(this.url+ '/user' , user)
  }

  login(user:User){
    return this.http.post<any>(this.url+'/user/login', user)
  }

  loggedIn(){

    if (localStorage.getItem('token')) {
      return true
    }else{
      return false
    }
    
  }

}
