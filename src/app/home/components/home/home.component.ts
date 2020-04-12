import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Router } from '@angular/router';
import { SongService } from 'src/app/core/services/song/song.service';
import { ConexionesService } from 'src/app/core/services/conexiones/conexiones.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  song: any[] = [];


  constructor(
    private router: Router,
    private serviceSong: SongService,
    private playService:ConexionesService) {
    this.songs()
  }

  ngOnInit(): void {
  }

  songs() {
    this.serviceSong.getSong()
      .subscribe((data: any) => {
        this.song = data.message;
        console.log(this.song)

        let songsFilter = data.message.filter(songs => {
          return songs.idGener.nameGener === 'Electronica'
        });
        
        console.log(songsFilter)
      })
  }

  reproducir(termino:any){

    console.log(termino)
    this.playService.reproducir$.emit(termino)

  }

}