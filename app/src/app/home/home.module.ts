import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchModule } from '@movies/core/search/search.module';

import { AuthGuard } from '@movies/core/auth.guard';
import { HeaderComponent } from '@movies/core/header/header.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HomeEffects } from 'app/home/home.effect';
import { home } from 'app/home/home.reducer';
import { SharedModule } from '../shared/index';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MovieListDetailsComponent } from './movie-list-details/movie-list-details.component';
import { MovieListsComponent } from './movie-lists/movie-lists.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    SearchModule.forRoot(),
    StoreModule.forFeature('home', home),
    EffectsModule.forFeature([HomeEffects])
  ],
  providers: [
    AuthGuard
  ],
  exports: [HeaderComponent],
  declarations: [
    HomeComponent,
    HeaderComponent,
    NowPlayingComponent,
    MovieListsComponent,
    MovieListDetailsComponent,
    FavoritesComponent
  ]
})
export class HomeModule { }
