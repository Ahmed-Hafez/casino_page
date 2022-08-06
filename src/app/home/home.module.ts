import { GamesPageComponent } from './pages/game-page/games-page.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [HomeComponent, GamesPageComponent],
  imports: [
    CommonModule,
    MatProgressBarModule,
    HomeRoutingModule,
    SharedModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
