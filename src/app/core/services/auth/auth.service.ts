import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from 'src/app/interface/user.interfece';
import { Router } from '@angular/router';



@Injectable({providedIn: 'root'})
export class AuthService {

  /*
    getToken() {
      const token = localStorage.getItem('token')
    }
  
    getQuery(query: string) {
      const url = `https://api.spotify.com/v1/${query}`
  
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${this.getToken()}` 
      })
  
      return this.http.get(url, { headers })
    }*/
  private url = 'https://bictiamusic.herokuapp.com'
  //private url = 'http://localhost:3000'
  //public sessionData: SessionData;


  constructor(private http: HttpClient,
    private router: Router) {
    }


  getUser() {
    return this.http.get(this.url + '/user')
  }

  createUser(user: User) {
    return this.http.post(this.url + '/user', user)
  }

  login(user: User) {
    return this.http.post<any>(this.url + '/user/login', user)
  }

  loggedIn() {

    if (localStorage.getItem('token')) {
      return true
    } else {
      return false
    }
  }
  updateUser(id:string, user: any){
    let header = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')});
      //header.set( "Authorization", "Bearer "+localStorage.getItem('token'));
      console.log('mostrando '+ localStorage.getItem('token'));
      console.log ('datos '+user.user, user.email, user.firstName, user.lastName);
      return this.http.patch(this.url + '/user/edituser/' + id, user,{ headers : header})
  }

}
