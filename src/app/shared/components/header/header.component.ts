import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  changeName:any = {
    name : localStorage.getItem('dataUser'),
    photo: localStorage.getItem('imagen')
  
  };
  
 

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/auth/login'])
  }


}
