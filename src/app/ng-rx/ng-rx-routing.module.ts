import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { MovieComponent } from './components/movie/movie.component';

const routes: Routes = [
  {
    path: '',
    component: AddMovieComponent
  },
  {
    path: ':id',
    component: MovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgRxRoutingModule { }
