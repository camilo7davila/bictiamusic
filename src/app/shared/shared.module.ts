import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MusicPlayerComponent } from './components/music-player/music-player.component';
import { NavLeftComponent } from './components/nav-left/nav-left.component';



@NgModule({
  declarations: [
    HeaderComponent, 
    MusicPlayerComponent, 
    NavLeftComponent
  ],
  exports : [
    HeaderComponent, 
    MusicPlayerComponent, 
    NavLeftComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
