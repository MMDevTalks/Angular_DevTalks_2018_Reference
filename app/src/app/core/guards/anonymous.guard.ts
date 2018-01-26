import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from 'app/core/services';

@Injectable()
export class AnonymousGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this._authService.currentAccount$.map(account => {
      if (account) {
        this._router.navigate(['/home']);
        return false;
      } else {
        return true;
      }
    });
  }
}