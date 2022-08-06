import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { HomeService } from './../services/home.service';
import { filter, firstValueFrom, map, Observable, tap } from 'rxjs';
import { Game } from 'src/app/shared/models/game.model';

const categoriesList: string[] = [
  'top',
  'new',
  'slots',
  'jackpots',
  'live',
  'blackjack',
  'roulette',
  'table',
  'poker',
  'other',
];
export abstract class GamesPage {
  private category?: string;
  games!: Game[];
  isLoading: boolean = false;

  constructor(
    protected homeService: HomeService,
    protected router: Router,
    activatedRoute: ActivatedRoute
  ) {
    firstValueFrom(
      this.router.events.pipe(filter((event) => event instanceof NavigationEnd))
    ).then(() => {
      activatedRoute.paramMap.subscribe((param) => {
        if (this.isValidCategory(param.get('category')!)) {
          this.category = param.get('category')!;
          this.loadContent();
        } else {
          this.router.navigate(['/top']);
        }
      });
    });
  }

  getActiveCategory(selectedCategory: string): string | undefined {
    if (!this.isValidCategory(selectedCategory)) {
      this.router.navigate(['/top']);
      return undefined;
    }
    return selectedCategory;
  }

  isValidCategory(category: string): boolean {
    return categoriesList.includes(category);
  }

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
