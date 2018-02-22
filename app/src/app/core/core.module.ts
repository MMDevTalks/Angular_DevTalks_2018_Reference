import { SharedModule } from '@movies/shared';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService, AuthService } from '@movies/services';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';
import { AccountService } from './services/account.service';
import { APP_INITIALIZER } from '@angular/core';
import { accountLoader } from 'app/core/account.loader';
import { AnonymousGuard } from 'app/core/guards/anonymous.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'app/core/services/auth.interceptor';
@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    HttpClientModule
  ],
  declarations: [
  ],
  exports: [
  ],
  providers: [
    MovieService,
    AuthService,
    AuthGuard,
    AnonymousGuard,
    AccountService,
    {
      provide: APP_INITIALIZER,
      useFactory: accountLoader,
      deps: [AuthService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
