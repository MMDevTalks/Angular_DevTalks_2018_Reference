import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '@movies/core/movie.service';
import { Movie } from '@movies/models';
import 'rxjs/add/operator/share';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mm-movie-list-details',
  templateUrl: './movie-list-details.component.html',
  styleUrls: ['./movie-list-details.component.scss']
})
export class MovieListDetailsComponent implements OnInit {

  public movieList$: Observable<{ name: string, items: Array<Movie> }>;

  constructor(private _movieService: MovieService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.movieList$ = this._movieService.getList(this._route.snapshot.params.id).share();
  }

}
