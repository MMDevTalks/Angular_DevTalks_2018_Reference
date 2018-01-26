import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import { AccountService } from 'app/core/services/account.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { environment } from 'environments/environment';


@Injectable()
export class AuthService {
  public currentAccount$ = new BehaviorSubject<any>(null);
  constructor(private _http: HttpClient, private _accountService: AccountService) { }
  getRequestToken() {
    return this._http.get(`authentication/token/new`)
      .do((response: any) => {
        const token = response.request_token;
        const redirectTo = `http://${location.host}/login`;
        location.href = `${environment.THEMOVIE_DB_BASE_URL}/authenticate/${token}?redirect_to=${redirectTo}`;
      });
  }

  getSession(request_token: string) {
    let params = new HttpParams();
    params = params.set('request_token', request_token);
    return this._http.get(`authentication/session/new`, { params })
      .mergeMap((response: any) => {
        localStorage.setItem('session_id', response.session_id);
        return this.getAccountAsync();
      });
  }

  getAccountAsync() {
    return this._accountService.getAccount().map(account => {
      this.currentAccount$.next(account);
     });
  }
}
