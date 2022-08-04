import { Observable, iif, of, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { Jackpot } from 'src/app/shared/models/jackpot.mode';

@Injectable({
  providedIn: 'root',
})
export class JackpotsService {
  readonly apiUrl: string = 'jackpots.php';
  private jackpotsCache?: Jackpot[];

  constructor(private apiService: ApiService) {}

  getJackpots(): Observable<Jackpot[]> {
    return iif(
      () => !!this.jackpotsCache,
      of(this.jackpotsCache as Jackpot[]),
      this.apiService
        .get<Jackpot[]>(this.apiUrl)
        .pipe(tap((response: Jackpot[]) => (this.jackpotsCache = response)))
    );
  }
}
