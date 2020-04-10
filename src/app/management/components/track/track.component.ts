import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SongService } from 'src/app/core/services/song/song.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private songService: SongService) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      nameSong: [''],
      idGener: [''],
      idAuthor: [''],
      idAlbum: [''],
      qualification: [''],
      durationSong: ['']
    })
  }

  save() {
    let songData = this.form.value;
    this.songService.postSong(songData)
      .subscribe(data => {
        console.log(data);
        songData === data;
      }, e => console.log(e))
    console.log(this.form.value)
  }

}
