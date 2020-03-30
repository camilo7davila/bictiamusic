import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HttpClientModule } from '@angular/common/http'; 
//Guard
import { GuardGuard } from './core/guard/guard.guard';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    FavoritosComponent,
    AboutusComponent,
    UpdateProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [GuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
