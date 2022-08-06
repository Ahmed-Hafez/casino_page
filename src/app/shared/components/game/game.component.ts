import { ActivatedRoute, Params } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../../models/game.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  @Input() game!: Game;

  isTop: boolean = false;
  isNew: boolean = false;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param: Params) => {
      if (param['category'] === 'new' || param['category'] === 'top') {
        this.isTop = false;
        this.isNew = false;
      } else {
        if (this.game.categories.find((cat) => cat === 'top'))
          this.isTop = true;
        if (this.game.categories.find((cat) => cat === 'new'))
          this.isNew = true;
      }
    });
  }
}
