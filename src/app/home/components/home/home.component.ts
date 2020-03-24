import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authServices:AuthService,
    private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/auth/login'])
  }

}