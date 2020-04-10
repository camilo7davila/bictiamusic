import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { GenerosComponent } from './components/generos/generos.component';
import { ArtistasComponent } from './components/artistas/artistas.component';
import { AboutComponent } from './components/about/about.component';
import { GeneroDetalleComponent } from './components/generos/generoDetalle/genero-detalle/genero-detalle.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'favoritos',
    component: FavoritosComponent
  },
  {
    path:'generos',
    component: GenerosComponent
  },
  {
    path:'generosdetalle/:id',
    component:GeneroDetalleComponent
  },
  {
    path:'artistas',
    component: ArtistasComponent
  },
  {
    path:'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
