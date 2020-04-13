import { Component, OnInit } from '@angular/core';
import { SongService } from 'src/app/core/services/song/song.service';
import { ActivatedRoute } from '@angular/router';
import { ConexionesService } from 'src/app/core/services/conexiones/conexiones.service';
import swal from 'sweetalert2'


@Component({
  selector: 'app-genero-detalle',
  templateUrl: './genero-detalle.component.html',
  styleUrls: ['./genero-detalle.component.scss']
})
export class GeneroDetalleComponent implements OnInit {

  alertSweet: string = ''

  generoDetalle: any[] = [

  ]

  addfavoritos: any[] = []

 
  private id;
  public genero;
  public estados: false;
  public posiciones: 0;
  public imagen;


  constructor(private songService: SongService,
    private router: ActivatedRoute,
    private playService: ConexionesService
  ) { 
    
  }

  ngOnInit(): void {

    this.router.params.subscribe((data: any) => {
      this.id = data.id
    })

    this.getGeneroDetalle()
    this.estados

  }

  getGeneroDetalle() {
    this.songService.getGeneroDetalle(this.id)
      .subscribe((data) => {
        console.log(data)
        this.generoDetalle = data.message
        this.genero = data.message[0].idGener.nameGener
        this.imagen = data.message[0].idGener.image
        console.log(data.message)
      })
  }

  enviarCancion(cancion: any) {
    console.log(cancion)
    this.playService.reproducir$.emit(cancion)
  }

  estado(estado: any) {
    this.estados = estado
    this.playService.estaReproduciendo$.emit(this.estados)
  }

  posicion(posicion: any) {
    console.log(posicion)
    this.posiciones = posicion
  }

  getFavoritos(idSong: string) {
    let user = localStorage.getItem('id')
    
    this.songService.patchFavoritos(user, idSong)
      .subscribe((data: any) => {
        console.log('Favoritos ------>', data.statusCode)
        swal.fire('Se ha agregado correctamente',this.alertSweet,'success')
      },err => swal.fire(`${err.error.error}`, this.alertSweet, 'warning'))
  }

  removeFavoritos(idSong: string) {
    let user = localStorage.getItem('id')
    this.songService.removeFavoritos(user, idSong)
      .subscribe((data: any) => {
        swal.fire('Se ha removido correctamente',this.alertSweet,'success')
        console.log('Remove fav ---->', data.statusCode)
      })
  }



}
