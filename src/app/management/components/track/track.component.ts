import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SongService } from 'src/app/core/services/song/song.service';

 

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private songService: SongService, private storage: AngularFireStorage) {
    this.buildForm();
  }
  img$: Observable<any>;
  input: string = ''
  
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
  
  uploadFile(event) {
    const file = event.target.files[0];
    const dir = `imagenprueba/${file.name}`;
    const fileRef = this.storage.ref(dir);
    const task = this.storage.upload(dir, file);
    alert('se subio la foto')

    task.snapshotChanges().pipe(
      finalize(async () => {
        this.img$ = await fileRef.getDownloadURL();
        this.img$.subscribe((url) => {
          console.log(url);
          this.input = url
        })
      })
    ).subscribe();
  }

}
