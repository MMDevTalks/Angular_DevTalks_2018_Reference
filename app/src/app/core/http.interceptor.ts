import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Injectable, Inject } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpParams } from '@angular/common/http';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const api_key = environment.THEMOVIE_DB_API_KEY;
        let session_id = null;
        if (isPlatformBrowser(this.platformId)) {
            session_id = localStorage.getItem('session_id');
        }
        let params = req.params.set('api_key', api_key);
        if (session_id) {
            params = params.set('session_id', session_id);
        }
        const authReq = req.clone({ url: `${environment.THEMOVIE_DB_API_URL}/${req.url}`, params });
        return next.handle(authReq);
    }
    constructor( @Inject(PLATFORM_ID) private platformId: Object, ) {

    }
}

