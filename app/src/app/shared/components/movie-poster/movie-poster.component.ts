import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { Movie } from '@movies/models';

@Component({
  selector: 'mm-movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrls: ['./movie-poster.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviePosterComponent implements OnInit {
  @Output() selectMovie: EventEmitter<Movie> = new EventEmitter();
  @Output() showMovieDetails: EventEmitter<any> = new EventEmitter();
  @Input() movie: Movie;
  @Input() isNotFlippable = false;
  @HostBinding('class.movie-poster--active') @Input() isSelected = false;

  clickMoviePoster(event: Event, movie: Movie, doNotPropagate?: boolean) {
    if (doNotPropagate) {
      event.stopPropagation();
    }
    this.selectMovie.emit(movie);
  }
  clickMovieDetails($event, movie: Movie) {
    $event.stopPropagation();
    this.showMovieDetails.emit(movie);
  }
  constructor() { }

  ngOnInit() {
  }

}
