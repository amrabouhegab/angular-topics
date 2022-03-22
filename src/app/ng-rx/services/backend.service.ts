import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, Subject } from "rxjs";
import { map } from 'rxjs/operators';
import { Movie } from "../models/Movie";

@Injectable()
export class BackendService {

  movies: Movie[] = [];

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    const subject = new Subject<Movie[]>();
    this.http.get<Movie[]>('assets/db/movies.json').pipe(
      map((data: any) => data.list)
    ).subscribe(val => {
      this.movies = val;
      subject.next(this.movies);
      subject.unsubscribe();
    });
    return subject.asObservable();
  }

  addMovie(movie: Movie): Observable<Movie>  {
    const id = this.getLastId();
    const newMovie = {
      ...movie,
      id
    } as Movie;
    this.movies = [...this.movies, newMovie];
    return of({...newMovie});
  }

  getLastId(): number {
    const movies: number[] = this.movies.map(movie => movie.id);
    return (Math.max(...movies) + 1);
  }
}
