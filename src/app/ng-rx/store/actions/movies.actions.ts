import { createAction, props } from "@ngrx/store";
import { Movie } from "../../models/Movie";


export const getMovies = createAction('[Movie] get Movie');
export const getMoviesSuccess = createAction('[Movie] get Movie Sucess', props<{movies: Movie[]}>());
export const addMovie = createAction('[Movie] add Movie', props<{movie: Movie}>());
export const addMovieSuccess = createAction('[Movie] add Movie success', props<{movie: Movie}>()); // TODO: check props
export const logout = createAction('Logout');
