import { Component, OnInit } from '@angular/core';
import { SongService } from 'src/app/core/services/song/song.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.scss']
})
export class ArtistasComponent implements OnInit {

  artistas: any[] = []

  constructor(private songService: SongService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.getArtista()
  }

  getArtista() {
    this.songService.getArtistas()
      .subscribe((data:any)=>{
        console.log(data)
        this.artistas = data.message
      })
    
  }
  getArtistaId(id: string) {
    console.log(id)
    this.router.navigate([`/artistadetalle/${id}`])
  }

  

}
