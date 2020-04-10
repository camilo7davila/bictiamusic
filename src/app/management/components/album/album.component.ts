import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { AlbumService } from 'src/app/core/services/album/album.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import swal from 'sweetalert2';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  
  form: FormGroup;
  img$: Observable<any>;
  file: any;
  fileName: string = "Selecciona tu imagen";

  constructor(
    private fb: FormBuilder,
    private albumService: AlbumService,
    private storage: AngularFireStorage) {
      this.buildForm();
     }

  ngOnInit(): void {
  }

  private buildForm() {
    let autId = localStorage.getItem('id');
    this.form = this.fb.group({
      nameAlbum: ['', [Validators.required]],
      photo: ['', [Validators.required]],   
      dateAlbum: ['', [
        Validators.required, 
        Validators.pattern('([0-2][0-9]|(3)[0-1])(\\/)(((0)[0-9])|((1)[0-2]))(\\/)\\d{4}')
      ]],
      idAutor: [autId, [Validators.required]]
    })
  }

  uploadImage(event) {
    const file = event.target.files[0];
    this.fileName = file.name;
    const dir = `/${this.form.get('idAutor').value}/${file.name}`;
    const fileRef = this.storage.ref(dir);
    const task = this.storage.upload(dir, file);
    console.log('uploading')

    task.snapshotChanges().pipe(
      finalize(async () => {
        this.img$ = await fileRef.getDownloadURL();
        this.img$.subscribe((url) => {
          this.form.controls['photo'].setValue(url)
        })
      })
    ).subscribe();
  }

  save() {
    console.log(this.form.value)
    let albumData = this.form.value;
    this.albumService.postAlbum(albumData)
      .subscribe(data => {
        console.log(data);
        albumData === data;
        swal.fire('Album registrado exitosamente!', '', 'success')
      }, e => {
        console.log(e);
        swal.fire('Hubo un problema al crear el album', '', 'error')
      })
  }

}
