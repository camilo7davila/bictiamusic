import { Component, OnInit } from '@angular/core';
import { ConexionesService } from 'src/app/core/services/conexiones/conexiones.service';


@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent implements OnInit {

  
  play: string = ''
  estado:boolean
  autorun:string ='autoplay'

  constructor( public playService:ConexionesService
  ) { }

  ngOnInit(): void {
    this.playService.reproducir$
    .subscribe(data=>{
      this.play = data
      console.log('reproducir', data)
    })

    this.estaReproduciendo()

  }

  estaReproduciendo(){

    this.playService.estaReproduciendo$
    .subscribe((data:any)=>{
      this.estado = data
      console.log('Desde music', data)
    
      if(data){
        let prueba1 = document.getElementById('audio')
        prueba1.setAttribute('autoplay',"")
        this.playPrueba()
      }else{
        if(!data){
          this.pause()
        }
       
      }

    })
  }

  playPrueba(){
    let prueba = document.getElementById('audio') as HTMLAudioElement
    prueba.play()
  }

  pause(){
    let prueba = document.getElementById('audio') as HTMLAudioElement
    prueba.pause()
  }

}
