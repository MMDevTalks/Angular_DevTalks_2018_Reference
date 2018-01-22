import { SharedModule } from '@movies/shared';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { SvgDefinitionsComponent } from './svg-definitions/svg-definitions.component';
import { MovieService } from './movie.service';

@NgModule({
  imports: [
    SharedModule,
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    SearchComponent,
    SvgDefinitionsComponent
  ],
  exports: [
    HeaderComponent,
    SvgDefinitionsComponent
  ],
  providers: [
    MovieService
  ]
})
export class CoreModule { }
