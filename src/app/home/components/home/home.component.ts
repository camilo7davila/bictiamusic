import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Router } from '@angular/router';
import { SongService } from 'src/app/core/services/song/song.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  song: any[]=[];

  constructor(
    private router:Router,
    private serviceSong: SongService) { 
      this.songs()
    }

  ngOnInit(): void {
  }

  songs(){
    this.serviceSong.getSong()
    .subscribe((data:any)=>{
      this.song = data.message;
      console.log(this.song)
    })
  }

}