import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'app/core/guards/auth.guard';
import { AnonymousGuard } from 'app/core/guards/anonymous.guard';
import { PreloadAllModules } from '@angular/router';
import { ProxyRouteComponent } from 'app/proxy-route/proxy-route.component';

const routes: Routes = [
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule',
        canActivate: [AnonymousGuard]
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'details',
        outlet: 'sidebar',
        component: ProxyRouteComponent,
        children: [
            {
                path: '',
                loadChildren: './details/details.module#DetailsModule',
            }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
