import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  img2$: Observable<any>

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      nameSong: ['', [Validators.required]],
      idGener: ['', [Validators.required]],
      idAuthor: ['', [Validators.required]],
      idAlbum: ['', [Validators.required]],
      qualification: ['', [Validators.required]],
      imgSong: [''],
      songFile: ['']
    })
  }


  uploadImage(event) {
    const file = event.target.files[0];
    const dir = `/${this.form.get('idAuthor').value}/${file.name}`;
    const fileRef = this.storage.ref(dir);
    const task = this.storage.upload(dir, file);
    alert('se subio la foto')

    task.snapshotChanges().pipe(
      finalize(async () => {
        this.img$ = await fileRef.getDownloadURL();
        this.img$.subscribe((url) => {
          this.form.get('imgSong').setValue(url)
        })
      })
    ).subscribe();
  }

  uploadMP3(event){
    const file = event.target.files[0];
    const dir = `/${this.form.get('idAuthor').value}/${file.name}`;
    const fileRef = this.storage.ref(dir);
    const task = this.storage.upload(dir, file);
    alert('se subio la foto')

    task.snapshotChanges().pipe(
      finalize(async () => {
        this.img2$ = await fileRef.getDownloadURL();
        this.img2$.subscribe((url) => {
          this.form.get('songFile').setValue(url)
        })
      })
    ).subscribe();
  }

  save() {
    console.log(this.form.value);
    // let songData = this.form.value;
    // this.songService.postSong(songData)
    //   .subscribe(data => {
    //     console.log(data);
    //     songData === data;
    //   }, e => console.log(e))
    // console.log(this.form.value)
  }
}
