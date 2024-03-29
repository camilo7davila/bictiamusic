import { Component, OnInit } from '@angular/core';
import { SongService } from 'src/app/core/services/song/song.service';
import { ActivatedRoute } from '@angular/router';
import { ConexionesService } from 'src/app/core/services/conexiones/conexiones.service';


@Component({
  selector: 'app-genero-detalle',
  templateUrl: './genero-detalle.component.html',
  styleUrls: ['./genero-detalle.component.scss']
})
export class GeneroDetalleComponent implements OnInit {

  generoDetalle: any[] = [

  ]
  private id;
  public genero;
  public estados: false;
  public posiciones: 0;
  public favoritosEstado: false;

  constructor(private songService: SongService,
    private router: ActivatedRoute,
    private playService: ConexionesService
  ) { }

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

  favEstado(estadoFav: any) {
    this.favoritosEstado = estadoFav
  }

  getFavoritos(idFav: string) {
    this.songService.postFavoritos(idFav)
      .subscribe((data: any) => {
        console.log('Favoritos ------>', data)
      })

    console.log(idFav)
  }


}
