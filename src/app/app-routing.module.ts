import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TeamProfileComponent } from './components/team-profile/team-profile.component';
import { PlayerComponent } from './components/player/player.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'eq/:id', component: TeamProfileComponent},
  {path: 'play/:id', component: PlayerComponent},
  {path: 'details/:id', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
