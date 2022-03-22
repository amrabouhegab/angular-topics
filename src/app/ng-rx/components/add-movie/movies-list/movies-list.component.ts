import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Movie } from 'src/app/ng-rx/models/Movie';
import { getMovies } from 'src/app/ng-rx/store/actions/movies.actions';
import { MovieState } from 'src/app/ng-rx/store/reducers';
import { movieSelector } from 'src/app/ng-rx/store/selectors/movie.selectors';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  movies$ = this.store.pipe(select(movieSelector))

  constructor(private store: Store<MovieState>,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllMovies();
    this.movies$.subscribe(val => {
      console.log(val);

    })
  }

  getAllMovies(): void {
    this.store.dispatch(getMovies());
  }

  onSelectMovie(movie: Movie) {
    this.router.navigateByUrl(`ngrx/${movie.id}`);
  }

}
