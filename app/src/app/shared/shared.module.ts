import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviePosterComponent } from './components/movie-poster/movie-poster.component';
import { SvgDefinitionsComponent } from './components/svg-definitions/svg-definitions.component';
import { IconComponent } from './components/icon/icon.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MoviePosterComponent, SvgDefinitionsComponent, IconComponent, ButtonComponent],
  exports: [MoviePosterComponent, SvgDefinitionsComponent, IconComponent, ButtonComponent]
})
export class SharedModule { }
