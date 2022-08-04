import { Observable } from 'rxjs';
import { ApiService } from '../core/services/api.service';
import { Injectable } from '@angular/core';
import { Game } from 'src/app/shared/models/game.model';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  readonly apiUrl: string = 'games.php';

  constructor(private apiService: ApiService) {}

  getGames(): Observable<Game[]> {
    return this.apiService.get<Game[]>(this.apiUrl);
  }
}
