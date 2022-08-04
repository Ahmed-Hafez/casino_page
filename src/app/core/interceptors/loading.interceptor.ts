import { LoadingService } from './../../shared/services/loading.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.loadingService.setLoadingState(true, request.url);
    return next.handle(request).pipe(
      map((evt) => {
        if (evt instanceof HttpResponse) {
          this.loadingService.setLoadingState(false, request.url);
        }
        return evt;
      }),
      catchError((err) => {
        this.loadingService.setLoadingState(false, request.url);
        return throwError(() => err);
      })
    );
  }
}
