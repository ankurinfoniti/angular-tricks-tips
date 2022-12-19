import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  cacheMap = new Map<string, HttpResponse<any>>();

  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // not cacheable request
    if (!this.isRequestCacheable(request)) {
      return next.handle(request);
    } else {
      // request is cacheable
      const url = request.url.toLowerCase();

      if (this.cacheMap.has(url)) {
        return of(this.cacheMap.get(url) as HttpResponse<any>);
      } else {
        return next.handle(request).pipe(
          tap((event) => {
            if (event instanceof HttpResponse) {
              this.cacheMap.set(url, event);
            }
          })
        );
      }
    }
  }

  isRequestCacheable(req: HttpRequest<any>): boolean {
    // we are going to cache get method only
    if (req.method === 'GET') {
      const urls = ['json/india.json', 'json/usa.json'];

      for (let i = 0; i < urls.length; i++) {
        if (req.url.toLowerCase().includes(urls[i].toLowerCase())) {
          return true;
        }
      }
    }

    return false;
  }
}
