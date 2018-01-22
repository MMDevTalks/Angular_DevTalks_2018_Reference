import { Component, OnInit } from '@angular/core';
import { MovieService } from './core/movie.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Component({
  selector: 'mm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public movies$: Observable<Array<any>>;
  public selectedMovie: any;
  public movieDetails: any;

  constructor(private _movieService: MovieService) { }

  selectMovie(movie) {
    this.selectedMovie = movie;
  }
  showMovieDetails(movie) {
    this.movieDetails = movie;
  }
  ngOnInit() {
    this.movies$ = this._movieService.getMovies();
  }
}
