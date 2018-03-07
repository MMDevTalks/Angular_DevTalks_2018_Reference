import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@movies/core/auth.guard';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomeComponent } from './home.component';
import { MovieListDetailsComponent } from './movie-list-details/movie-list-details.component';
import { MovieListsComponent } from './movie-lists/movie-lists.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  canActivate: [
    AuthGuard
  ],
  children: [
    {
      path: 'now-playing',
      component: NowPlayingComponent
    },
    {
      path: 'favorites',
      component: FavoritesComponent
    },
    {
      path: 'lists',
      component: MovieListsComponent
    },
    {
      path: 'lists/:id',
      component: MovieListDetailsComponent
    },
    {
      path: '',
      redirectTo: '/home/now-playing',
      pathMatch: 'full'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
