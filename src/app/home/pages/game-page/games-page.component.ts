import { HomeService } from '../../services/home.service';
import { Component } from '@angular/core';
import { GamesPage } from '../../abstract-classes/games-page.abstract-class';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.scss'],
})
export class GamesPageComponent extends GamesPage {
  constructor(
    homeService: HomeService,
    router: Router,
    activatedRoute: ActivatedRoute
  ) {
    super(homeService, router, activatedRoute);
  }
}
