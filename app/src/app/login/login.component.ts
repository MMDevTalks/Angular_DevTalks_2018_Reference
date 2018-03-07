import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'app/core/auth.service';

@Component({
  selector: 'mm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loading = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private _authService: AuthService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
  }

  ngOnInit() {
    /** dont authenticate on the server */
    if (isPlatformBrowser(this.platformId)) {
      const request_token = this._route.snapshot.queryParams['request_token'];
      if (request_token && !this._route.snapshot.queryParams['denied']) {
        this.loading = true;
        this._authService.getSession(request_token)
          .subscribe(_ => {
            this._router.navigate(['/']);
          });
      } else {
        throw new Error('No token or request denied.');
      }
    }
  }

  login() {
    this.loading = true;
    this._authService.getRequestToken().subscribe();
  }

}
