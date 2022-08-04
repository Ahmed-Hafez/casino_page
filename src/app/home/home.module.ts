import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { TopComponent } from './pages/top/top.component';
import { NewComponent } from './pages/new/new.component';
import { SlotsComponent } from './pages/slots/slots.component';
import { JackpotsComponent } from './pages/jackpots/jackpots.component';
import { LiveComponent } from './pages/live/live.component';
import { BlackjackComponent } from './pages/blackjack/blackjack.component';
import { RouletteComponent } from './pages/roulette/roulette.component';
import { TableComponent } from './pages/table/table.component';
import { PokerComponent } from './pages/poker/poker.component';
import { OtherComponent } from './pages/other/other.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    HomeComponent,
    TopComponent,
    NewComponent,
    SlotsComponent,
    JackpotsComponent,
    LiveComponent,
    BlackjackComponent,
    RouletteComponent,
    TableComponent,
    PokerComponent,
    OtherComponent,
  ],
  imports: [
    CommonModule,
    MatProgressBarModule,
    HomeRoutingModule,
    SharedModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
