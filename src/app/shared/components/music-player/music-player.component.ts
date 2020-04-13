import { Component, OnInit } from '@angular/core';
import { ConexionesService } from 'src/app/core/services/conexiones/conexiones.service';


@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent implements OnInit {

  currentTime: string = '0:00'
  vol: number = 1
  volIcon: string = "up"
  totalTime: string = '0:00'
  fillBar: HTMLElement
  volFill: HTMLElement
  player: HTMLAudioElement
  state: string = 'play';
  song: any = {}
  estado: boolean
  autorun: string = 'autoplay'
  author: string = 'Artista'
  songName: string = 'Nombre de la Canción'
  imgSrc: string = 'assets/img/default-cd.png'

  constructor(public playService: ConexionesService
  ) { }

  ngOnInit(): void {
    // this.pSong()
    this.player = document.getElementById('audio') as HTMLAudioElement
    this.fillBar = document.getElementById('fill') as HTMLElement
    this.volFill = document.getElementById('volFill') as HTMLElement
    this.playService.reproducir$
      .subscribe(data => {
        this.song = data
        this.author = this.song.idAuthor.user
        this.songName = this.song.nameSong
        this.state = 'pause'
        this.imgSrc = this.song.idAlbum.photo

      })

    this.estaReproduciendo()

    this.player.addEventListener('timeupdate', () => {
      this.currentTime = this.parseTime(this.player.currentTime || 0)
      this.totalTime = this.parseTime(this.player.duration || 0)
      let position = this.player.currentTime / this.player.duration
      this.fillBar.style.width = (position * 100) + '%';
    })
  }

  changePos($event) {
    let pos = $event.offsetX / $event.target.offsetWidth
    if (this.player.currentSrc !== '') {
      this.player.currentTime = pos * this.player.duration
    }
  }
  changeVol($event) {
    let pos = $event.offsetX / $event.target.offsetWidth
    if (this.player.currentSrc !== '') {
      this.player.volume = pos
      this.volFill.style.width = pos * 100 + '%'
      if (pos < 0.1) this.volIcon = 'off'
      else if (pos < 0.5) this.volIcon = 'down'
      else this.volIcon = 'up'
    }
  }

  setVol() {
    if (this.player.currentSrc !== '') {
      if (this.volIcon == 'up') {
        this.player.volume = 0
        this.volFill.style.width = '0%'
        this.volIcon = 'off'
      } else {
        this.player.volume = 1
        this.volFill.style.width = '100%'
        this.volIcon = 'up'
      }
    }
  }

  estaReproduciendo() {

    this.playService.estaReproduciendo$
      .subscribe((data: any) => {
        this.estado = data
        console.log('Desde music', data)

        if (data) {
          let prueba1 = document.getElementById('audio')
          prueba1.setAttribute('autoplay', "")
          this.pSong()
        } else {
          if (!data) {
            this.pSong()
          }

        }

      })
  }

  parseTime(seconds) {
    let date = new Date(seconds * 1000);
    let sf = '', mf = ''
    let mm = date.getUTCMinutes();
    let ss = date.getSeconds();
    if (mm < 10) mf = '0'
    if (ss < 10) sf = '0'
    return mf + mm + ":" + sf + ss;
  }

  pSong() {
    let player = this.player
    if (player.currentSrc !== '') {

      if (player.paused) {
        this.state = "pause"
        player.play()
      } else {
        this.state = "play"
        player.pause()
      }
    }
  }

}
