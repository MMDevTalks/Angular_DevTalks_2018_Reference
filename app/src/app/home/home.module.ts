import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from 'app/core/header/header.component';
import { SearchComponent } from 'app/core/search/search.component';
import { SharedModule } from 'app/shared';
import { StoreModule } from '@ngrx/store';
import { home } from './home.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HomeEffects } from './home.effects';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    StoreModule.forFeature('home', home),
    EffectsModule.forFeature([HomeEffects])
  ],
  declarations: [HomeComponent, HeaderComponent, SearchComponent]
})
export class HomeModule { }
