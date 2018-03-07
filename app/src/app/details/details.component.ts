import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { slideFromRight } from '@movies/animations';
import { MovieService } from '@movies/core/movie.service';
import { Movie } from '@movies/models';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Colors } from '../shared/directives/color-extractor.directive';
@Component({
  selector: 'mm-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  animations: [slideFromRight()],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsComponent implements OnInit {
  movie$: Observable<Movie>;
  additionalMovies$: Observable<Array<Movie>>;
  loading = true;
  @HostBinding('@slideRightAnimation')
  public slideRightAnimation = true;
  @ViewChild('movieCover') _movieCover: ElementRef;
  @HostListener('document:keydown', ['$event']) closeOnEscape(event: any) {
    if (event.keyCode === 27) {
      this.closeSelf();
    }
  }
  closeSelf() {
    this._router.navigate([{ outlets: { sidebar: null } }]);
  }
  additionalMovieSelected(movie: Movie) {
    this._router.navigate([{ outlets: { sidebar: `details/${movie.id}` } }]);
  }
  constructor(private _route: ActivatedRoute, private _router: Router, private _movieService: MovieService) {
  }
  morphBackground(colors: Colors) {
    this._movieCover.nativeElement.style.background = `linear-gradient(to bottom right, ${colors.DarkVibrant} 65%, ${colors.Vibrant})`;
  }
  ngOnInit() {
    this.movie$ = this._route.params
      .do(_ => this.loading = true)
      .switchMap(params => {
        this.additionalMovies$ = null;
        return this._movieService.getMovieById(+params['id'])
          .do(_ => this.loading = false);
      });
  }

  getAdditionalMovies(type: string) {
    if (type === 'similar') {
      this.additionalMovies$ = this._movieService.getSimilarMovies(this._route.snapshot.params['id']);
    } else if (type === 'recommended') {
      this.additionalMovies$ = this._movieService.getRecommendedMovies(this._route.snapshot.params['id']);
    }
  }


}
