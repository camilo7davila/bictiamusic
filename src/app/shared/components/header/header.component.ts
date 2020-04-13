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
    photo: localStorage.getItem('imagen'),
    artista:localStorage.getItem('artista')
  };
  

  constructor(private router:Router) {
   }

  ngOnInit(): void {
  }


  logout(){
    localStorage.clear()
    this.router.navigate(['/auth/login'])
  }

}
