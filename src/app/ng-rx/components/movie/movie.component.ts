import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Movie } from '../../models/Movie';
import { MovieState } from '../../store/reducers';
import { movie } from '../../store/selectors/movie.selectors';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie$ = this.store.select(movie);

  constructor(private store: Store<MovieState>) { }

  ngOnInit(): void {}

}
