import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnonymousGuard } from '@movies/core/anonymous.guard';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [
      AnonymousGuard
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
