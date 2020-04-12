import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {


  constructor(
    private authService: AuthService,
    private router:Router)
  {
    
  }
 
  canActivate(){
    if(this.authService.loggedIn()){
      return true;
    }
    this.router.navigate(['/auth/login'])
    return false
  }
  
}
