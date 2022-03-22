import { routerReducer, RouterReducerState } from "@ngrx/router-store";
import { ActionReducer, ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "src/environments/environment";
import { Movie } from "../models/Movie";
import { logout } from "./actions/movies.actions";
import { movieReducer } from "./reducers/movie.reducers";

export interface MovieState {
  movies: Movie[],
  router: RouterReducerState<any>;
}

export const reducers: ActionReducerMap<any> = {
  movies: movieReducer,
  router: routerReducer
};


export const debugMeta = (reducer: ActionReducer<any>): ActionReducer<any> => {
  return (state, action) => {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  }
}

export const logoutMeta = (reducer: ActionReducer<any>): ActionReducer<any> => {
  return (state, action) => {
    if (action.type === logout.type) {
      return reducer(undefined, { type: 'INIT' });
    }
    return reducer(state, action);
  }
}


export const metaReducers: MetaReducer<any>[] =
  environment.production ? [logoutMeta] : [debugMeta, logoutMeta];
