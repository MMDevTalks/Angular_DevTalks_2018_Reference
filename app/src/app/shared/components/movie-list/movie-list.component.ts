import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MovieList } from '@movies/models';

@Component({
  selector: 'mm-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieListComponent implements OnInit {
  @Input() movieList: MovieList;
  @Output() movieListSelected: EventEmitter<MovieList> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
