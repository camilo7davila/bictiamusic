import { Component, OnInit } from '@angular/core';
import { SongService } from 'src/app/core/services/song/song.service';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.scss']
})
export class ArtistasComponent implements OnInit {

  artistas:any[]=[]

  constructor(private songService: SongService) {
   
   }

  ngOnInit(): void {
   this.getArtista()
  }

  getArtista(){
    this.songService.getArtistas()
    .subscribe((data:any)=>{
      this.artistas = data.message
      console.log('Artistas',data.message)
    })
  }

}
