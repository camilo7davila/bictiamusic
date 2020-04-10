import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ManagementRoutingModule } from './management-routing.module';
import { GeneralComponent } from './components/general/general.component';
import { ArtistComponent } from './components/artist/artist.component';
import { TrackComponent } from './components/track/track.component';
import { AlbumComponent } from './components/album/album.component';
import { AccountComponent } from './components/account/account.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [GeneralComponent, ArtistComponent, TrackComponent, AlbumComponent, AccountComponent],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ManagementModule { }
