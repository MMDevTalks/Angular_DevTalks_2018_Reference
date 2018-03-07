import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { staggerAnimation } from '@movies/animations';
import { Movie } from '@movies/models';

@Component({
  selector: 'mm-movie-grid',
  templateUrl: './movie-grid.component.html',
  styleUrls: ['./movie-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [staggerAnimation(100, 250)]
})
export class MovieGridComponent implements OnInit {
  @Input() movies: Array<Movie>;
  @Input() isToggleable: boolean;
  @Input() isInToggleMode: boolean;
  @Input() selectedMovie: Movie;
  @Output() movieCollected: EventEmitter<Movie> = new EventEmitter();
  @Output() movieListToggled: EventEmitter<boolean> = new EventEmitter();
  @Output() movieSelected: EventEmitter<Movie> = new EventEmitter();
  @Output() movieDetailsShown: EventEmitter<Movie> = new EventEmitter();
  toggleEditMode() {
    this.movieSelected.emit(null);
    this.movieListToggled.emit(!this.isInToggleMode);
  }
  selectMovie(movie: Movie) {
    if (this.isInToggleMode) {
      this.movieCollected.emit(movie);
    } else {
      this.movieSelected.emit(movie);
    }
  }

  showMovieDetails(movie: Movie) {
    this.movieDetailsShown.emit(movie);
  }
  constructor() { }

  ngOnInit() {
  }

}
