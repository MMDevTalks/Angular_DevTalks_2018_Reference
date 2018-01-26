import { SharedModule } from '@movies/shared';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from 'app/app-routing.module';
import { ProxyRouteComponent } from './proxy-route/proxy-route.component';

@NgModule({
  declarations: [
    AppComponent,
    ProxyRouteComponent
  ],
  imports: [
    SharedModule,
    CoreModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
