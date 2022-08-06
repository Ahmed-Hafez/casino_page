import { JackpotsService } from '../../api-services/jackpots.service';
import { GamesService } from '../../api-services/games.service';
import { Injectable } from '@angular/core';
import { Observable, iif, of, mergeMap, map, interval } from 'rxjs';
import { getRandomIntValue, intersect } from 'src/app/shared/helpers';
import { Game } from 'src/app/shared/models/game.model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private gamesCache?: Game[] = undefined;

  constructor(
    private gamesService: GamesService,
    private jackpotsService: JackpotsService
  ) {}

  getGames(): Observable<Game[]> {
    return iif(
      () => !!this.gamesCache,
      of(this.gamesCache as Game[]),
      this.gamesService.getGames().pipe(
        mergeMap((games) =>
          this.jackpotsService
            .getJackpots()
            .pipe(map((jackpots) => ({ games, jackpots })))
        ),
        map((res) => {
          let jackpotGames: Game[] = [];
          res.games.forEach((game) => {
            // Adjust (other) category
            if (
              intersect(game.categories, ['ball', 'virtual', 'fun']).length > 0
            ) {
              game.categories.push('other');
            }

            // Adjust (jackpots) category
            const jackpotData = res.jackpots.find(
              (jackpot) => game.id === jackpot.game
            );
            let jackpotGame = {
              ...game,
              isJackpot: !!jackpotData,
              amount: jackpotData?.amount,
            };
            if (jackpotData) jackpotGame.categories.push('jackpots');
            this.manipulateAmounts(jackpotGame);
            jackpotGames.push(jackpotGame);
          });
          this.gamesCache = jackpotGames;
          return jackpotGames;
        })
      )
    );
  }

  private manipulateAmounts(jackpot: Game): void {
    interval(getRandomIntValue(2, 4) * 1000).subscribe(() => {
      let randomAmount = 0;
      let newJackpotAmount = 0;
      do {
        randomAmount = getRandomIntValue(5000, 10000);
        newJackpotAmount = jackpot.amount! + randomAmount;
      } while (newJackpotAmount <= 0);
      jackpot.amount! = newJackpotAmount;
    });
  }
}
