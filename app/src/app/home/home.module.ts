import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from 'app/core/header/header.component';
import { SearchComponent } from 'app/core/search/search.component';
import { SharedModule } from 'app/shared';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [HomeComponent, HeaderComponent, SearchComponent]
})
export class HomeModule { }
