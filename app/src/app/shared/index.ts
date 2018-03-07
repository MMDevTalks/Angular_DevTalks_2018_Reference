import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AddToListFormComponent } from './components/add-to-list-form/add-to-list-form.component';
import { ButtonComponent } from './components/button/button.component';
import { FabComponent } from './components/fab/fab.component';
import { IconComponent } from './components/icon/icon.component';
import { LimitedCharacterTextareaComponent } from './components/limited-character-textarea/limited-character-textarea.component';
import { MovieGridComponent } from './components/movie-grid/movie-grid.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MoviePosterComponent } from './components/movie-poster/movie-poster.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { AutoFocusDirective } from './directives/auto-focus.directive';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { MaxCharacterCountValidator } from './directives/max-character-count.directive';
import { TintDirective } from './directives/tint.directives';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    IconComponent,
    MoviePosterComponent,
    TintDirective,
    ButtonComponent,
    AutoFocusDirective,
    SpinnerComponent,
    FabComponent,
    MovieListComponent,
    AddToListFormComponent,
    MovieGridComponent,
    LimitedCharacterTextareaComponent,
    MaxCharacterCountValidator,
    ClickOutsideDirective
  ],
  exports: [
    IconComponent,
    MoviePosterComponent,
    TintDirective,
    ButtonComponent,
    AutoFocusDirective,
    SpinnerComponent,
    FabComponent,
    MovieListComponent,
    AddToListFormComponent,
    MovieGridComponent,
    LimitedCharacterTextareaComponent,
    MaxCharacterCountValidator,
    ClickOutsideDirective
  ]
})
export class SharedModule { }
