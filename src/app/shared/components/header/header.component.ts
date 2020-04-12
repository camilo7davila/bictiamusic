import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountComponent } from 'src/app/management/components/account/account.component';

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
  
 

  constructor(private router:Router) {
   }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('dataUser')
    localStorage.removeItem('imagen')
    this.router.navigate(['/auth/login'])
  }


}
