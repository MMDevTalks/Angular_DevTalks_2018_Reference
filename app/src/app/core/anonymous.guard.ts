import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AnonymousGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this._authService.currentAccount$.map(account => {
      if (account) {
        this._router.navigate(['/']);
        return false;
      } else {
        return true;
      }
    });
  }
}
