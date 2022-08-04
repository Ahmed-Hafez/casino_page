import { Component, OnInit } from '@angular/core';
import { GamesPage } from '../../abstract-classes/games-page.abstract-class';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-table',
  templateUrl: '../../../shared/templates/game-page/game-page.template.html',
  styleUrls: ['../../../shared/templates/game-page/game-page.template.scss'],
})
export class TableComponent extends GamesPage implements OnInit {
  readonly category: string = 'table';

  constructor(homeService: HomeService) {
    super(homeService);
  }

  ngOnInit(): void {
    this.loadContent();
  }
}
