import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MusicPlayerComponent } from './components/music-player/music-player.component';
import { NavLeftComponent } from './components/nav-left/nav-left.component';




@NgModule({
  declarations: [
    NavLeftComponent,
    HeaderComponent, 
    MusicPlayerComponent, 
    
  ],
  exports : [
    HeaderComponent, 
    MusicPlayerComponent, 
    NavLeftComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
