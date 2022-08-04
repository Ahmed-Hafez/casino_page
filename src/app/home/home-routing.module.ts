import { OtherComponent } from './pages/other/other.component';
import { PokerComponent } from './pages/poker/poker.component';
import { TableComponent } from './pages/table/table.component';
import { RouletteComponent } from './pages/roulette/roulette.component';
import { BlackjackComponent } from './pages/blackjack/blackjack.component';
import { LiveComponent } from './pages/live/live.component';
import { JackpotsComponent } from './pages/jackpots/jackpots.component';
import { NewComponent } from './pages/new/new.component';
import { TopComponent } from './pages/top/top.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlotsComponent } from './pages/slots/slots.component';

const routes: Routes = [
  {
    path: '',
    component: TopComponent,
    pathMatch: 'full',
  },
  {
    path: 'new',
    component: NewComponent,
    pathMatch: 'full',
  },
  {
    path: 'slots',
    component: SlotsComponent,
    pathMatch: 'full',
  },
  {
    path: 'jackpots',
    component: JackpotsComponent,
    pathMatch: 'full',
  },
  {
    path: 'live',
    component: LiveComponent,
    pathMatch: 'full',
  },
  {
    path: 'blackjack',
    component: BlackjackComponent,
    pathMatch: 'full',
  },
  {
    path: 'roulette',
    component: RouletteComponent,
    pathMatch: 'full',
  },
  {
    path: 'table',
    component: TableComponent,
    pathMatch: 'full',
  },
  {
    path: 'poker',
    component: PokerComponent,
    pathMatch: 'full',
  },
  {
    path: 'other',
    component: OtherComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
