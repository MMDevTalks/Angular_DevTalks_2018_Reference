import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'mm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _authService: AuthService, private _route: ActivatedRoute, private _router : Router) { }

  ngOnInit() {
    const request_token = this._route.snapshot.queryParams['request_token'];
    if (request_token && !this._route.snapshot.queryParams['denied']) {
      this._authService.getSession(request_token).subscribe(response => {
        this._router.navigate(['/home']);
      });
    }
  }

  login() {
    this._authService.getRequestToken().subscribe();

  }

}
