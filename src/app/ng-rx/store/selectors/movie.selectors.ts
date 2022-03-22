import { createSelector } from "@ngrx/store";
import { Movie } from "../../models/Movie";
import { MovieState } from "../reducers";
import { RouterState } from "../router-serializer";


export const movieSelector = createSelector(
  (state: MovieState) => state.movies,
  (movies: Movie[]) => movies
);

export const routerParams = createSelector(
  (state: MovieState) => state.router.state,
  (state: RouterState) => state.params
);

export const movie = createSelector(
  movieSelector,
  routerParams,
  (movies: Movie[], {id}) => movies.filter(m => m.id  === +id)[0]
);
