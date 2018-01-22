import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './components/icon/icon.component';
import { MoviePosterComponent } from './components/movie-poster/movie-poster.component';
import { TintDirective } from './directives/tint.directives';
import { ButtonComponent } from './components/button/button.component';
import { AutoFocusDirective } from './directives/auto-focus.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IconComponent, MoviePosterComponent, TintDirective, ButtonComponent, AutoFocusDirective],
  exports: [IconComponent, MoviePosterComponent, TintDirective, ButtonComponent, AutoFocusDirective]
})
export class SharedModule { }
