import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { User } from 'src/app/interface/user.interfece';
import { Router } from '@angular/router';
import { NgForm } from "@angular/forms";
import swal from 'sweetalert2'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  alertSweet: string = ''

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
        localStorage.setItem('token', data.message.token)
        localStorage.setItem('dataUser',data.message.user)
        this.router.navigate(['/home'])
        swal.fire(`Bienvenido ${this.userFromHTML.email}`, this.alertSweet, 'success')
      },
        err => swal.fire(`${err.error.error}`, this.alertSweet, 'warning')
      )
  }

  /*
  PRUEBAS PARA VALIDACIONES
  guardar(format:NgForm){
    console.log("Formulario pposteado")
    console.log("ngform",format)
    console.log("valor", format.value)
    console.log(this.userFromHTML)
  }*/

}
