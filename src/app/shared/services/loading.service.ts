import { BehaviorSubject, Observable, delay } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private _isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  private loadingMap: Map<string, boolean> = new Map<string, boolean>();

  get isLoading$(): Observable<boolean> {
    // Note: delay(0) is used to prevent ExpressionChangedAfterItHasBeenCheckedError
    return this._isLoading$.pipe(delay(0));
  }

  setLoadingState(isLoading: boolean, url: string): void {
    if (!url) {
      throw new Error('Request URL must be provided');
    }

    if (isLoading) {
      this._isLoading$.next(true);
      this.loadingMap.set(url, true);
    } else if (!isLoading && this.loadingMap.has(url)) {
      this.loadingMap.delete(url);
    }

    if (this.loadingMap.size === 0) {
      this._isLoading$.next(false);
    }
  }
}
