import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { slideFromRight } from '@movies/animations';
import { Movie } from '@movies/models';

@Component({
  selector: 'mm-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideFromRight()]
})
export class SearchItemComponent implements OnInit {
  @Input() movie: Movie;
  @Input() isSelected: boolean;
  constructor() { }

  ngOnInit() {
  }

}
