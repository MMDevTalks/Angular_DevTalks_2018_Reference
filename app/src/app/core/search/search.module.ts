import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@movies/shared';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SearchEffects } from 'app/core/search/search.effect';
import { SearchItemComponent } from './search-item/search-item.component';
import { SearchComponent } from './search.component';
import { SearchService } from './search.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([SearchEffects])
  ],
  declarations: [SearchComponent, SearchItemComponent],
  exports: [SearchComponent]
})
export class SearchModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SearchModule,
      providers: [
        SearchService
      ]
    };
  }
}
