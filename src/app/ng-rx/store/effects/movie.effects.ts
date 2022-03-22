import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { throwError } from "rxjs";
import { catchError, concatMap, exhaustMap, map } from "rxjs/operators";
import { Movie } from "../../models/Movie";
import { BackendService } from "../../services/backend.service";
import { addMovie, addMovieSuccess, getMovies, getMoviesSuccess } from "../actions/movies.actions";

@Injectable()
export class MovieEffects {

  loadMovies$ = createEffect(() => this.action$.pipe(
    ofType(getMovies),
    exhaustMap(() => this.backendService.getMovies().pipe(
      map((movies: Movie[]) => getMoviesSuccess({ movies })),
      catchError(err => throwError(err))
    ))
  ));

  addMovie$ = createEffect(() => this.action$.pipe(
    ofType(addMovie),
    concatMap((newMovie) => this.backendService.addMovie(newMovie.movie).pipe(
      map((movie: any) => addMovieSuccess({ movie })),
      catchError(err => throwError(err))
    ))
  ));

  constructor(private action$: Actions,
    private backendService: BackendService) { }

}
