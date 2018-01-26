import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
import { SharedModule } from 'app/shared';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DetailsRoutingModule
  ],
  declarations: [DetailsComponent]
})
export class DetailsModule { }
