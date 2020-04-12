
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { User } from 'src/app/interface/user.interfece';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import swal from 'sweetalert2'
//import { AnyTxtRecord } from 'dns';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  form: FormGroup;
  passForm: FormGroup;
  id: any;
  canChangePwd: boolean;

  changeName: any = {
    user: localStorage.getItem('dataUser'),
    email: localStorage.getItem('email'),
    firstName: localStorage.getItem('firstName'), 
    lastName: localStorage.getItem('lastName'),
    password: '',
    photo: localStorage.getItem('imagen')
  };

  userFromHTML: User = {
    firstName: '',
    lastName: '',
    email: 'Confirma tu correo',
    user: '',
    password: ''
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
    this.id = localStorage.getItem('idUser');
    console.log(this.canChangePwd)
  }
  
  refreshData(data: any) {
    localStorage.setItem('dataUser', data.message.user)
  }
  
  updateBool($event) {
    this.canChangePwd = !this.passForm.invalid && (this.form.controls['email'].value === localStorage.getItem('email'))
    // console.log(this.passForm.invalid, '   and   ', (this.form.controls['email'].value))
  }

  ngOnInit() {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      lastName: ['', [Validators.required]],
      firstName: ['', [Validators.required]]
    });

    this.passForm = this.formBuilder.group({
      newPassword: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(4)]],
    });



    /* this.form.valueChanges
    .pipe(debounceTime(500))
    .subscribe(value => {
      console.log(value);
    }); */
  }
  UpdateUser() {

    this.authService.updateUser(this.id, this.changeName)
      .subscribe((data: any) => {
        console.log(data)
        this.refreshData(data)
      }, e => console.log(e)

      );
    swal.fire('Guardado', 'Haz modificado tus datos', 'success');
    setTimeout('document.location = document.location', 1000);

  }

  ConfirmPassword() {
    this.changeName.password = this.passForm.controls['newPassword'].value
    console.log(this.changeName)
    
    this.authService.updateUser(this.id, this.changeName)
      .subscribe( data => {
        console.log(data)
      })
    swal.fire('Guardado', 'Haz modificado tu contraseña', 'success');
  }
  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      console.log(value);
    }
  }
}
