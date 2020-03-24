import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { User } from 'src/app/interface/user.interfece';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userFromHTML: User = {
    firstName : '',
    lastName : '',
    email : '',
    user : '',
    password : ''
  };

  constructor(
    private authService: AuthService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  createUser(){
    this.authService.createUser(this.userFromHTML).subscribe(data => {
      console.log('usuario crado exitosamente',data);
      console.log(data)
      alert('resgistro exitoso')
       this.router.navigate(['/auth/login'])
    },
    err => alert(`${err.error.error}`)
    )
  }
}
