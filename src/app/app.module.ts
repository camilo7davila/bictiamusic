import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HttpClientModule } from '@angular/common/http'; 
import { RouterModule, Router } from '@angular/router';
//Guard
import { GuardGuard } from './core/guard/guard.guard';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [GuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
