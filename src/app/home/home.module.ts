import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { GenerosComponent } from './components/generos/generos.component';
import { ArtistasComponent } from './components/artistas/artistas.component';
import { AboutComponent } from './components/about/about.component';
import { GeneroDetalleComponent } from './components/generos/generoDetalle/genero-detalle/genero-detalle.component';
import { ArtistaDetalleComponent } from './components/artistas/artistasDetalle/artista-detalle/artista-detalle.component';


@NgModule({
  declarations: [HomeComponent, FavoritosComponent, GenerosComponent, ArtistasComponent, AboutComponent, GeneroDetalleComponent, ArtistaDetalleComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule  
  ]
})
export class HomeModule { }
