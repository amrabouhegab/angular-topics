import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addMovie, logout } from '../../store/actions/movies.actions';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  newMovie: any;
  title = 'movieApp';
  form!: NgForm;

  constructor(private store: Store,
    private http: HttpClient) {}

  ngOnInit(): void {}

  addNewMovies(form: NgForm): void {
    const {value} = form.form;
    console.log(value);
    // this.store.dispatch(addMovie({movie: value}));
    const formData = new FormData();
    for (const key in value) {
      formData.append(key, value[key]);
    }
    this.http.post('http://localhost:3000/ngrx', {});
  }

  logout() {
    this.store.dispatch(logout());
  }

}
