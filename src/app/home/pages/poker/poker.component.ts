import { Component, OnInit } from '@angular/core';
import { GamesPage } from '../../abstract-classes/games-page.abstract-class';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-poker',
  templateUrl: '../../../shared/templates/game-page/game-page.template.html',
  styleUrls: ['../../../shared/templates/game-page/game-page.template.scss'],
})
export class PokerComponent extends GamesPage implements OnInit {
  readonly category: string = 'poker';

  constructor(homeService: HomeService) {
    super(homeService);
  }

  ngOnInit(): void {
    this.loadContent();
  }
}
