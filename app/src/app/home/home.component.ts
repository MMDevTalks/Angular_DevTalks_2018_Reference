import {
  Component,
  OnInit,
  Inject,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { Router } from '@angular/router';
import { ICreateList } from 'app/shared/interfaces/icreate-list';
import {
  trigger,
  animate,
  keyframes,
  style,
  transition
} from '@angular/animations';
import { popIn } from 'app/shared/animations/pop-in.animation';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromHome from './home.reducer';
import * as HomeActions from './home.actions';

@Component({
  selector: 'mm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [popIn(0.5)],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  public homeState$: Observable<fromHome.HomeState>;
  public selectedMovie: any;
  public isCollecting = false;
  public collectedMovies: Array<any> = [];
  public isFormShown = false;
  public loading = false;
  constructor(
    private _router: Router,
    private _store: Store<fromHome.State>
  ) {}

  selectMovie(movie) {
    this._store.dispatch(new HomeActions.SelectMovie(movie));
  }
  showMovieDetails(movie) {
    this._router.navigate([{ outlets: { sidebar: `details/${movie.id}` } }]);
  }
  showForm() {
    this.isFormShown = true;
  }
  // createList(createListDTO: { list: ICreateList; movies: Array<any> }) {
  //   this._movieService.createList(createListDTO).subscribe(_ => {
  //     this.isFormShown = false;
  //     this.isCollecting = false;
  //     this.collectedMovies = [];
  //   });
  // }
  ngOnInit() {
    this.homeState$ = this._store.select('home');
    this._store.dispatch(new HomeActions.GetMovies());


  }
  toggleCollecting() {
    this.isCollecting = !this.isCollecting;
  }
}
