import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from './core/core.module';
import { RouterEffects } from './core/store/router.effect';
import { CustomSerializer } from './shared/utils/route.serializer';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { search } from 'app/core/search/search.reducer';
import { environment } from 'environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CoreModule.forRoot(),
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    StoreModule.forRoot({ routerReducer, search }),
    StoreRouterConnectingModule,
    // Note that you must instrument after importing StoreModule
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    }),
    EffectsModule.forRoot([RouterEffects]),
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
    RouterModule
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomSerializer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
