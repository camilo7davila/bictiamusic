import { Component, OnInit } from '@angular/core';
import { SongService } from 'src/app/core/services/song/song.service';


@Component({
  selector: 'app-generos',
  templateUrl: './generos.component.html',
  styleUrls: ['./generos.component.scss']
})
export class GenerosComponent implements OnInit {

  constructor(private songService: SongService) { 
    this.getGeneros()
  }

  generos:any[]=[];

  ngOnInit(): void {
  }

  getGeneros(){
    this.songService.getGeneros()
    .subscribe((data:any)=>{
      console.log(data.message)
      this.generos = data.message
    })
  }

  getGeneroId(id:string){
    console.log(id)
  
  }

}
