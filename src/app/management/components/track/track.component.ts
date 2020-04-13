import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SongService } from 'src/app/core/services/song/song.service';
import { AlbumService } from 'src/app/core/services/album/album.service';
import { GenresService } from 'src/app/core/services/genres/genres.service'
import Swal from 'sweetalert2';



@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {

  form: FormGroup;
  genres: any[] = []
  albums: any[] = []
  imgSrc: string = "assets/img/default-cd.png"


  constructor(
    private formBuilder: FormBuilder,
    private songService: SongService,
    private albumService: AlbumService,
    private genreService: GenresService,
    private storage: AngularFireStorage) {
    this.buildForm();
  }
  songUpload$: Observable<any>;

  fileName: string = 'ejemplo-cancion.mp3';

  ngOnInit(): void {
    this.genreService.getGenres()
      .subscribe( data => {
        this.genres = data.message
      })
    this.albumService.getAlbumByAuthor()
      .subscribe( data => {
        this.albums = data.message
      })
  }

  private buildForm() {
    let autId = localStorage.getItem('id');
    console.log(autId);
    this.form = this.formBuilder.group({
      nameSong: ['', [Validators.required]],
      idGener: ['', [Validators.required]],
      idAuthor: [autId, [Validators.required]],
      idAlbum: ['', [Validators.required]],
      qualification: ['', [Validators.required,Validators.max(5), Validators.min(1)]],
      songFile: ['', [Validators.required]]
    })
  }

  uploadMP3(event:any){
    const file = event.target.files[0];
    this.fileName = file.name;
    const dir = `/${this.form.get('idAuthor').value}/${file.name}`;
    const fileRef = this.storage.ref(dir);
    const task = this.storage.upload(dir, file);
    console.log('se subio el audio')

    task.snapshotChanges().pipe(
      finalize(async () => {
        this.songUpload$ = await fileRef.getDownloadURL();
        this.songUpload$.subscribe((url) => {
          this.form.controls['songFile'].setValue(url)
        })
      })
    ).subscribe();
  }

  prevImg($event) {
    let s = $event.target.selectedIndex
    this.imgSrc = this.albums[s].photo || this.imgSrc
    console.log(this.albums[s])
  }

  save() {
    let songData = this.form.value;
    this.songService.postSong(songData)
    .subscribe(data => {
      console.log(data);
      songData === data;
      Swal.fire('Canción registrada exitosamente!', '', 'success')
    }, e => {
      console.log(e);
      Swal.fire('Hubo un problema al crear la canción', '', 'error')
    })
    console.log(this.form.value)
  }
}
