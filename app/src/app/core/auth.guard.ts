import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor( @Inject(PLATFORM_ID) private platformId: Object, private _authService: AuthService, private _router: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this._authService.currentAccount$.map(account => {
      if (isPlatformBrowser(this.platformId)) {
        if (account) {
          return true;
        } else {
          this._router.navigate(['/login']);
          return false;
        }
      } else {
        return true;
      }
    });
  }
}
