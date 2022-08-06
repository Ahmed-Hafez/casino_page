import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: ':category',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'top',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'top',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
