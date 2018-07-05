import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from './shared/services/localStorage.service';
import { DOMAIN_TOKEN, PREFIX_TOKEN } from './config';

@Injectable()
export class HttpService extends HttpClient {

  public constructor(
    _httpHandler: HttpHandler,
    @Inject(DOMAIN_TOKEN) private _domain: string,
    @Inject(PREFIX_TOKEN) private _prefix: string,
    private _localStorageService: LocalStorageService,
  ) {
    super(_httpHandler);
  }

  // tslint:disable-next-line: no-any
  public nonAuthorizedRequest(url: string, body: any, method: string = 'POST'): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders();
    return this._requestMethod(url, body, method, headers);
  }

  // tslint:disable-next-line: no-any
  public authorizedRequest<T>(url: string, body: any, method: string = 'POST', params?: any): Observable<any> {
    // TODO need refactor this
    let token = '';
    try {
      token = this._localStorageService.getItem('token');
    } catch (err) {
      // tslint:disable-next-line
      console.log(err);
    }
    const headers: HttpHeaders = new HttpHeaders(
      {
        'Authorization': `Bearer ${token}`,
      }
    );
    const httpParams: HttpParams = new HttpParams({ fromObject: params });
    return this._requestMethod<T>(url, body, method, headers, httpParams);
  }

  // tslint:disable-next-line
  private _requestMethod<T>(url: string, body: any, method: string = 'POST', headers?: any, params?: any): Observable<HttpEvent<T>> {
    return this.request(new HttpRequest(
      method,
      `${this._domain}${this._prefix}${url}`,
      body,
      { headers, params }
    ));
  }
}
