import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage/storage';
import { AlbumService } from 'src/app/core/services/album/album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  
  form: FormGroup;

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

}
