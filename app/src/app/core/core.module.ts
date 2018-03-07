import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { accountLoader } from './account.loader';
import { AccountService } from './account.service';
import { AuthService } from './auth.service';
import { AuthInterceptor } from './http.interceptor';
import { MovieService } from './movie.service';
import { ProxyRouteComponent } from './proxy-route/proxy-route.component';
import { SvgDefinitionsComponent } from './svg-definitions/svg-definitions.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    SvgDefinitionsComponent,
    ProxyRouteComponent
  ],
  exports: [
    SvgDefinitionsComponent
  ]
})

export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        AuthService,
        MovieService,
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
    };
  }
}

