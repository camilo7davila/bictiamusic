import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MusicPlayerComponent } from './components/music-player/music-player.component';
import { NavLeftComponent } from './components/nav-left/nav-left.component';
import { RouterModule } from '@angular/router';




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
