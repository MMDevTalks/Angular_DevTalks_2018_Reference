import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MovieService } from '@movies/services';

@Component({
  selector: 'mm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public movies$: Observable<Array<any>>;
  public selectedMovie: any;

  constructor(private _movieService: MovieService) { }

  selectMovie(movie) {
    this.selectedMovie = movie;
  }

  ngOnInit() {
    this.movies$ = this._movieService.getNowPlayingMovies();
  }

}
