import { Component, OnInit } from '@angular/core';
import { SongService } from 'src/app/core/services/song/song.service';
import { ConexionesService } from 'src/app/core/services/conexiones/conexiones.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {

  favoritos:any[]=[]

  constructor(private songService:SongService,
    private playService: ConexionesService) { 
    this.getFavoritos()
  }

  ngOnInit(): void {
  }

  getFavoritos(){
    let id = localStorage.getItem('id')
    this.songService.getFavoritos(id)
    .subscribe((data:any)=>{
      this.favoritos = data.message[0].favSong
      console.log(data.message[0].favSong)
    })
  }
  reproducir(termino:any){

    console.log(termino)
    this.playService.reproducir$.emit(termino)
  }

}
