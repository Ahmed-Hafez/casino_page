import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { intersect } from 'src/app/shared/helpers';
import { Game } from 'src/app/shared/models/game.model';
import { GamesPage } from '../../abstract-classes/games-page.abstract-class';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-other',
  templateUrl: '../../../shared/templates/game-page/game-page.template.html',
  styleUrls: ['../../../shared/templates/game-page/game-page.template.scss'],
})
export class OtherComponent extends GamesPage implements OnInit {
  readonly category: string = 'other';
  private readonly categoriesList: string[] = ['ball', 'virtual', 'fun'];

  constructor(homeService: HomeService) {
    super(homeService);
  }

  ngOnInit(): void {
    this.loadContent();
  }

  protected override getGames(): Observable<Game[]> {
    return this.homeService
      .getGames()
      .pipe(
        map((games) =>
          games.filter(
            (game) => intersect(game.categories, this.categoriesList).length > 0
          )
        )
      );
  }
}
