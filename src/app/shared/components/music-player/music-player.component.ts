import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent implements OnInit {

  music:any = {
    ruta: 'assets/music/'
  };

  constructor(
  ) { }

  ngOnInit(): void {
  }

  play( songName:string ){
    const song: HTMLMediaElement = document.getElementById('audio') as HTMLMediaElement;
    song.setAttribute('src',this.music.ruta+songName+'.mp3');
    song.play();
  }

}
