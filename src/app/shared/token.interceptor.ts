import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AUTH_TOKEN } from '@app/shared/constants';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private authToken = AUTH_TOKEN;
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(
      request.clone({
        setHeaders: { Authorization: `Bearer ${this.authToken}` }
      })
    );
  }
}
