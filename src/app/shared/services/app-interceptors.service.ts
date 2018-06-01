// import { LocalStorageService } from './localStorage.service';
import { Go } from './../../store/actions/router.action';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpErrorResponse, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { catchError, filter, map } from 'rxjs/operators';
import { TwoFactorLoginSuccess, Logout } from '../../store/actions';
@Injectable()
export class AppInterceptorsService implements HttpInterceptor {

  public constructor(
    private _store: Store<StoreStates>,
    // private _localStorageService: LocalStorageService,
  ) {}

  // tslint:disable-next-line
  public intercept<T extends { data: any, message?: string }>
    (req: HttpRequest<T>, next: HttpHandler): Observable<HttpResponse<T>> {
    const headers: HttpHeaders = req.headers.append('Content-Type', 'application/json');
    const jsonReq: HttpRequest<T> = req.clone({ headers });
    return next
      .handle(jsonReq).pipe(
        filter((res: HttpResponse<{ data: T } | T>) => res instanceof HttpResponse),
        map((res: HttpResponse<{ data: T  } | T>) => {
          if (res.status !== 206) {
            // tslint:disable-next-line: no-any
            return /assets\/i18n/.test(jsonReq.url) ? res : (res.body as any).data;
          }
          // tslint:disable-next-line: no-any
          this._store.dispatch(new TwoFactorLoginSuccess((res.body as any).data));
          this._store.dispatch(new Go({path: ['login', 'reg', 'twofactor']}));
          return {status: 206};
        }),
        catchError((err: HttpErrorResponse) => {
          if (err.status === 403 || err.status === 401) {
            this._store.dispatch(new Logout());
          }
          return Observable.throw(err);
        })
      );
  }

}
