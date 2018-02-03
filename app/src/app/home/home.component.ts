import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MovieService } from '@movies/services';
import { Router } from '@angular/router';

@Component({
  selector: 'mm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public movies: Array<any>;
  public selectedMovie: any;

  constructor(private _movieService: MovieService, private _router: Router) {
  }

  selectMovie(movie) {
    this.selectedMovie = movie;
  }
  showMovieDetails(movie) {
    this._router.navigate([{ outlets: { 'sidebar': `details/${movie.id}` } }]);
  }

  ngOnInit() {
    setTimeout(() => { this.movies[0] = {...this.movies[0], poster_path: null}; }, 2500);
    this._movieService.getNowPlayingMovies().subscribe(movies => this.movies = movies);
  }

}

