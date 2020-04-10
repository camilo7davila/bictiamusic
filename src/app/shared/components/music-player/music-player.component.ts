import { Component, OnInit } from '@angular/core';
import { ConexionesService } from 'src/app/core/services/conexiones/conexiones.service';


@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent implements OnInit {

  music:any = {
    ruta: 'assets/music/'
  };

  play: string = ''

  constructor( public playService:ConexionesService
  ) { }

  ngOnInit(): void {
    this.playService.reproducir$
    .subscribe(data=>{
      this.play = data
      console.log('reproducir', data)
    })

  }

  /*play( songName:string ){
    const song: HTMLMediaElement = document.getElementById('audio') as HTMLMediaElement;
    song.setAttribute('src',this.music.ruta+songName+'.mp3');
    song.play();
  }*/



}
