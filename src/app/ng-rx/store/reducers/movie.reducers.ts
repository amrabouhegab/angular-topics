import { createReducer, on } from "@ngrx/store";
import { Movie } from "../../models/Movie";
import { addMovieSuccess, getMoviesSuccess } from "../actions/movies.actions";


const initialState: ReadonlyArray<Movie> = [];

export const movieReducer = createReducer(
  initialState,
  on(getMoviesSuccess, (state, {movies}) => [...movies] ),
  on(addMovieSuccess, (state, {movie}) => {
    return [...state, movie]
  })
);
