import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AnonymousGuard } from '@movies/core/anonymous.guard';

import { SharedModule } from '../shared/index';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    AnonymousGuard
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
