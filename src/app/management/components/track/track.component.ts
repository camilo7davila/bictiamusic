import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {

  img$: Observable<any>;
  input: string = ''

  constructor(private storage: AngularFireStorage) { }

  ngOnInit(): void {
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
