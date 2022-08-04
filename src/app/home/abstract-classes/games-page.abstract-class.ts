import { HomeService } from './../services/home.service';
import { map, Observable, tap } from 'rxjs';
import { Game } from 'src/app/shared/models/game.model';

export abstract class GamesPage {
  abstract readonly category: string;
  games!: Game[];
  isLoading: boolean = false;

  constructor(protected homeService: HomeService) {}

  protected getGames(): Observable<Game[]> {
    return this.homeService
      .getGames()
      .pipe(
        map((games) =>
          games.filter(
            (game) =>
              game.categories.findIndex((cat) => cat === this.category) !== -1
          )
        )
      );
  }

  protected loadContent(): void {
    this.isLoading = true;
    this.getGames()
      .pipe(
        tap((res: Game[]) => (this.games = res)),
        tap((res) => console.log(res))
      )
      .subscribe(() => (this.isLoading = false));
  }
}
