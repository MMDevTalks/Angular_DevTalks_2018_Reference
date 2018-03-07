import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@movies/shared';
import { ColorExtractorDirective } from './../shared/directives/color-extractor.directive';
import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';

@NgModule({
  imports: [
    CommonModule,
    DetailsRoutingModule,
    SharedModule,
    // EffectsModule.forFeature([DetailsEffects])
  ],
  declarations: [
    DetailsComponent,
    ColorExtractorDirective
  ],
  exports: [
    ColorExtractorDirective
  ]
})
export class DetailsModule { }
