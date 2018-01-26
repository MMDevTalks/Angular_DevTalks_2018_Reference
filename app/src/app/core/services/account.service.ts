import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpParams } from '@angular/common/http';
const API_KEY = 'ca49bfda426c4e87678009d2dfc4361e';

@Injectable()
export class AccountService {

  constructor(private _http: HttpClient) {

  }

  public getAccount(): Observable<any> {
    return this._http.get('account');
  }
}
