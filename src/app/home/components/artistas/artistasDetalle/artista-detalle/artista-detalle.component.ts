import { Component, OnInit } from '@angular/core';
import { SongService } from 'src/app/core/services/song/song.service';
import { ActivatedRoute } from '@angular/router';
import { ConexionesService } from 'src/app/core/services/conexiones/conexiones.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-artista-detalle',
  templateUrl: './artista-detalle.component.html',
  styleUrls: ['./artista-detalle.component.scss']
})
export class ArtistaDetalleComponent implements OnInit {

  artistaDetalle: any[] = [

  ]

  addfavoritos: any[] = []

  alertSweet: string = ''

  private id;
  public genero;
  public estados: false;
  public posiciones: 0;
  public imagen;
  public artista;

  constructor(private songService: SongService,
    private router: ActivatedRoute,
    private playService: ConexionesService) { }

  ngOnInit(): void {
    this.router.params.subscribe((data: any) => {
      this.id = data.id
    })

    this.getArtistaDetalle()
    this.estados
  }

  getArtistaDetalle() {
    this.songService.getArtistaDetalle(this.id)
      .subscribe((data:any)=>{
        this.artistaDetalle = data.message
        this.imagen = data.message[0].idAlbum.photo
        this.artista = data.message[0].idAuthor.user
        console.log(data.message)
      })
  }

  // COMIENZA COPIA DE GENERO DETALLE //

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

  listadoFavoritos(){
    let id = localStorage.getItem('id')
    this.songService.getFavoritos(id)
    .subscribe((data:any)=>{
      this.addfavoritos=data.message[0].favSong[0]._id
      console.log('Listado fav->>>',data.message[0].favSong)
    })
  }

  // FIN COPIA GENERO DETALLE

}
