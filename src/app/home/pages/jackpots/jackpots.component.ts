import { HomeService } from './../../services/home.service';
import { Component, OnInit } from '@angular/core';
import { GamesPage } from '../../abstract-classes/games-page.abstract-class';

@Component({
  selector: 'app-jackpots',
  templateUrl: '../../../shared/templates/game-page/game-page.template.html',
  styleUrls: ['../../../shared/templates/game-page/game-page.template.scss'],
})
export class JackpotsComponent extends GamesPage implements OnInit {
  readonly category: string = 'jackpots';

  constructor(homeService: HomeService) {
    super(homeService);
  }

  ngOnInit(): void {
    this.loadContent();
  }
}
