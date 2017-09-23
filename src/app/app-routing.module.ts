import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieComponent } from './components/movie/movie.component'
import { AppComponent } from './app.component'
import { PeliculaDetalle } from './components/pelicula-detalle/pelicula-detalle.component';

const routes: Routes = [
  {
    path: 'movie/:id',
    component: MovieComponent
  },
  {
    path: 'pelicula-detalle',
    component: PeliculaDetalle
  },
  {
    path: '',
    component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
