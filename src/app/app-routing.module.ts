import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { GuardGuard } from './core/guard/guard.guard';

import { from } from 'rxjs';



const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
        canActivate:[GuardGuard]
      },
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
        canActivate:[GuardGuard]
      },
      {
        path: 'update-user',
        loadChildren: () => import('./update-user/update-user.module').then(m => m.UpdateUserModule),
       
      }
      
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  }
  
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
