import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from 'environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const api_key = environment.THEMOVIE_DB_API_KEY;
    const session_id = localStorage.getItem('session_id');
    let params = req.params.set('api_key', api_key);
    if (session_id) {
        params = params.set('session_id', session_id);
    }
    const authReq = req.clone({ url: `${environment.THEMOVIE_DB_API_URL}/${req.url}`, params });
    return next.handle(authReq);
  }


}
