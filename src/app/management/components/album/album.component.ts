import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { AlbumService } from 'src/app/core/services/album/album.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  
  form: FormGroup;
  img$: Observable<any>;

  constructor(
    private fb: FormBuilder,
    private albumService: AlbumService,
    private storage: AngularFireStorage) { }

  ngOnInit(): void {
  }

  private buildForm() {
    let autId = localStorage.getItem('id');
    this.form = this.fb.group({
      nameAlbum: [''],
      photo: [''],
      dateAlbum: [''],
      idAuthor: ['']
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
          this.form.controls['imgSong'].setValue(url)
        })
      })
    ).subscribe();
  }

  save() {
    console.log(this.form.value)
    // let albumData = this.form.value;
    // this.albumService.postAlbum(albumData)
    //   .subscribe(data => {
    //     console.log(data);
    //     albumData === data;
    //   }, e => console.log(e))
  }

}
