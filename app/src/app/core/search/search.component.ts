import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { staggerAnimation } from '@movies/animations';
import { Key } from '@movies/enums';
import { Movie } from '@movies/models';
import { Store } from '@ngrx/store/';
import { SearchState } from 'app/core/search/search.state';
import { AppState } from 'app/core/store/app.state';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounce';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/shareReplay';
import 'rxjs/add/operator/startWith';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import * as SearchActions from './search.actions';
import { SearchService } from './search.service';
@Component({
  selector: 'mm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [staggerAnimation(150, 450)]
})
export class SearchComponent implements OnInit {

  @ViewChild('input') searchInput: ElementRef;
  searchState$: Observable<SearchState>;
  public keyDownSub: Subscription;
  public inputSub: Subscription;
  public searchForm: FormGroup;
  @HostListener('keydown', ['$event'])
  handleEsc(event: any) {
    if (event.keyCode === Key.Escape) {
      this.store.dispatch(new SearchActions.HideResults());
    }
  }

  constructor(public store: Store<AppState>) {
    this.searchForm = new FormGroup({
      search: new FormControl()
    });
    this.searchState$ = this.store.select('search').shareReplay()
      .do(searchState => {
        this.searchForm.controls.search.patchValue(searchState.searchString);
      });
  }
  selectItem(itemIndex: number) {
    this.store.dispatch(new SearchActions.SelectItem(itemIndex));
  }
  showResults() {
    this.store.dispatch(new SearchActions.ShowResults());
  }
  hideResults() {
    this.store.dispatch(new SearchActions.HideResults());
  }
  ngOnInit() {
    this.keyDownSub = Observable.fromEvent<any>(this.searchInput.nativeElement, 'keydown')
      .map(event => event.keyCode)
      .filter(keyCode => [Key.ArrowUp, Key.ArrowDown, Key.Enter].indexOf(keyCode) !== -1)
      .switchMap(kc => this._navigate(kc))
      .subscribe(index => {
        this.store.dispatch(new SearchActions.NavigateToItem(index));
      });

    this.inputSub = Observable.fromEvent<any>(this.searchInput.nativeElement, 'input')
      .map(event => (event.target as HTMLInputElement).value)
      .do(query => {
        this.store.dispatch(new SearchActions.SendKeys(query));
        this.store.dispatch(new SearchActions.NavigateToItem(-1));
      }
      )
      .debounceTime(200)
      .distinctUntilChanged()
      .filter(query => {
        if (query.length > 2) {
          return true;
        } else {
          this.store.dispatch(new SearchActions.HideResults());
          return false;
        }
      })
      .map(query => {
        this.store.dispatch(new SearchActions.GetSearchResults(query));
      })
      .subscribe();

  }
  ngOnDestroy() {
    this.keyDownSub.unsubscribe();
    this.inputSub.unsubscribe();

  }
  private _navigate(keyCode: Key): Observable<number> {
    return this.store.select('search').take(1).map(ss => {
      switch (keyCode) {
        case Key.ArrowUp:
          if (ss.selectedItemIndex - 1 !== -2) {
            ss.selectedItemIndex--;
          }
          break;
        case Key.ArrowDown:
          if (ss.selectedItemIndex + 1 !== ss.searchResults.length) {
            ss.selectedItemIndex++;
          }
          break;
        case Key.Enter:
          if (ss.selectedItemIndex !== -1) {
            this.selectItem(ss.selectedItemIndex);
          }
          break;
      }
      return ss.selectedItemIndex;
    });
  }
}
