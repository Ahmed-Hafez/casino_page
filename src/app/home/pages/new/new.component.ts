import { Component, OnInit } from '@angular/core';
import { GamesPage } from '../../abstract-classes/games-page.abstract-class';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-new',
  templateUrl: '../../../shared/templates/game-page/game-page.template.html',
  styleUrls: ['../../../shared/templates/game-page/game-page.template.scss'],
})
export class NewComponent extends GamesPage implements OnInit {
  readonly category: string = 'new';

  constructor(homeService: HomeService) {
    super(homeService);
  }

  ngOnInit(): void {
    this.loadContent();
  }
}
