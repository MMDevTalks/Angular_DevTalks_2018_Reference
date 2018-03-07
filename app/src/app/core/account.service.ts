import { Observable } from 'rxjs/Observable';
import { IAccountInput, Account } from './../shared/models/account.model';
import { environment } from '../../environments/environment';
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class AccountService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object, public http: HttpClient) { }

  public getAccount(): Observable<Account> {
    let params = new HttpParams();
    params = params.set('api_key', environment.THEMOVIE_DB_API_KEY);
    if (isPlatformBrowser(this.platformId)) {
      params = params.set('session_id', localStorage.getItem('session_id'));
    }
    return this.http.get<IAccountInput>(`account`, { params }).map(res => new Account(res));
  }
}
