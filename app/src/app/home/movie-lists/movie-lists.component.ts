import { Component, OnInit } from '@angular/core';
import { MovieService } from '@movies/core/movie.service';
import { MovieList, Results } from '@movies/models';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mm-movie-lists',
  templateUrl: './movie-lists.component.html',
  styleUrls: ['./movie-lists.component.scss']
})
export class MovieListsComponent implements OnInit {

  public movieLists$: Observable<Results<MovieList>>;
  constructor(private _movieService: MovieService) { }

  ngOnInit() {
    this.movieLists$ = this._movieService.getMovieLists();
  }

}
