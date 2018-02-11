import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoviePosterComponent } from './components/movie-poster/movie-poster.component';
import { SvgDefinitionsComponent } from './components/svg-definitions/svg-definitions.component';
import { IconComponent } from './components/icon/icon.component';
import { ButtonComponent } from './components/button/button.component';
import { ColorExtractorDirective } from './directives/color-extractor.directive';
import { SpinnerComponent } from './component/spinner/spinner.component';
import { FabComponent } from './components/fab/fab.component';
import { AddToListFormComponent } from './components/add-to-list-form/add-to-list-form.component';
import { ComponentsComponent } from './components/components.component';
import { ExpandableTextareaComponent } from './components/expandable-textarea/expandable-textarea.component';
import { MaxCharacterValidatorDirective } from './directives/max-character-validator.directive';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [MoviePosterComponent, SvgDefinitionsComponent, IconComponent, ButtonComponent,
    ColorExtractorDirective, SpinnerComponent, FabComponent, AddToListFormComponent, ComponentsComponent,
    ExpandableTextareaComponent, MaxCharacterValidatorDirective],
  exports: [MoviePosterComponent, SvgDefinitionsComponent, IconComponent, ButtonComponent,
    ColorExtractorDirective, SpinnerComponent, FabComponent, AddToListFormComponent,
    ExpandableTextareaComponent, MaxCharacterValidatorDirective]
})
export class SharedModule { }
