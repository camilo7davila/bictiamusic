import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralComponent } from './components/general/general.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';
import { TrackComponent } from './components/track/track.component';
import { AccountComponent } from './components/account/account.component';
import { ArtistGuardGuard } from "../core/guard/artist-guard.guard";

const routes: Routes = [
  {
    path:'',
    component: GeneralComponent
  },
  {
    path:'account',
    component: AccountComponent
  },
  {
    path:'artist',
    component: ArtistComponent
  },
  {
    path:'album',
    component: AlbumComponent,
    canActivate:[ArtistGuardGuard]
  },
  {
    path:'track',
    component: TrackComponent,
    canActivate:[ArtistGuardGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
