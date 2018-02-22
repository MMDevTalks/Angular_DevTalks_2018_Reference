import { SharedModule } from '@movies/shared';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from 'app/app-routing.module';
import { ProxyRouteComponent } from './proxy-route/proxy-route.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import {
  routerReducer,
  StoreRouterConnectingModule,
  RouterStateSerializer
} from '@ngrx/router-store';
import { CustomSerializer } from 'app/utils/router.serializer';
@NgModule({
  declarations: [AppComponent, ProxyRouteComponent],
  imports: [
    SharedModule,
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ routerReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    StoreRouterConnectingModule,
    EffectsModule.forRoot([])
  ],
  providers: [
    {
      provide: RouterStateSerializer,
      useClass: CustomSerializer
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
