import { GameListComponent } from './components/game-list/game-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './components/game/game.component';
import { ImageLoaderDirective } from './directives/image-loader.directive';
import { NoGamesComponent } from './components/no-games/no-games.component';

const declarationsArray = [
  GameComponent,
  GameListComponent,
  ImageLoaderDirective,
  NoGamesComponent,
];

@NgModule({
  declarations: declarationsArray,
  imports: [CommonModule],
  exports: declarationsArray,
})
export class SharedModule {}
