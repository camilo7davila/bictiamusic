import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { User } from 'src/app/interface/user.interfece';
import { Router } from '@angular/router';
import swal from 'sweetalert2'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  alertSweet:string=''

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
      swal.fire(`Usuario ${this.userFromHTML.firstName} creado con éxito`,this.alertSweet,'success')
       this.router.navigate(['/auth/login'])
    },
    err => swal.fire(`${err.error.error}`,this.alertSweet,'warning')
  )
  }
}
