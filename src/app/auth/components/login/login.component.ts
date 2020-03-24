import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { User } from 'src/app/interface/user.interfece';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  userFromHTML: User = {
    firstName: '',
    lastName: '',
    email: '',
    user: '',
    password: ''
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.authService.getUser().subscribe(data => {
      console.log(data)
    })
  }

  login() {
    this.authService.login(this.userFromHTML)
      .subscribe((data: any) => {
        console.log(data)
        localStorage.setItem('token', data.message)
        this.router.navigate(['/home'])
        alert('Bievenido')
      },
        err => alert(`${err.error.error}`)
      )
  }
}
