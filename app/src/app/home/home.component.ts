import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MovieService } from '@movies/services';
import { Router } from '@angular/router';
import { ICreateList } from 'app/shared/interfaces/icreate-list';
import { trigger, animate, keyframes, style, transition } from '@angular/animations';
import { popIn } from 'app/shared/animations/pop-in.animation';

@Component({
  selector: 'mm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [popIn(0.5)]
})
export class HomeComponent implements OnInit {
  public movies$: Observable<Array<any>>;
  public selectedMovie: any;
  public isCollecting = false;
  public collectedMovies: Array<any> = [];
  public isFormShown = false;
  constructor(private _movieService: MovieService, private _router: Router) {
  }

  selectMovie(movie) {
    if (this.isCollecting) {
      if (this.collectedMovies.indexOf(movie) === -1) {
        this.collectedMovies = [...this.collectedMovies, movie];
      }
    } else {
      this.selectedMovie = movie;

    }
  }
  showMovieDetails(movie) {
    this._router.navigate([{ outlets: { 'sidebar': `details/${movie.id}` } }]);
  }
  showForm() {
    this.isFormShown = true;
  }
  createList(createListDTO: { list: ICreateList, movies: Array<any> }) {
    this._movieService.createList(createListDTO).subscribe(
      _ => {
        this.isFormShown = false;
        this.isCollecting = false;
        this.collectedMovies = [];
      }
    );
  }
  ngOnInit() {
    this.movies$ = this._movieService.getNowPlayingMovies();
  }
  toggleCollecting() {
    this.isCollecting = !this.isCollecting;
  }


}

