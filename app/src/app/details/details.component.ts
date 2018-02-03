import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'app/core/services';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { Colors } from 'app/shared/directives/color-extractor.directive';

@Component({
  selector: 'mm-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @ViewChild('movieCover') movieCover: ElementRef;
  movie$: Observable<any>;
  @HostListener('document:keydown', ['$event']) close(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.closeSelf();
    }
  }
  constructor(private _route: ActivatedRoute, private _movieService: MovieService, private _router: Router) {
  }
  closeSelf() {
    this._router.navigate([{ outlets: { 'sidebar': null } }]);
  }
  morphBackground(colors: Colors) {
    this.movieCover.nativeElement.style.background = `linear-gradient(to bottom right, ${colors.DarkVibrant} 65%, ${colors.Vibrant})`;
  }

  ngOnInit() {
    this.movie$ = this._route.params.switchMap(params =>
      this._movieService.getMovieById(params.id)
    );

  }

}
