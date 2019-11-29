import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './components/details/details.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TeamsComponent } from './components/teams/teams.component';
import { NavigComponent } from './components/navig/navig.component';
import { PlayerComponent } from './components/player/player.component';
import { PositionsTableComponent } from './components/positions-table/positions-table.component';
import { TeamProfileComponent } from './components/team-profile/team-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { TeamsService } from './services/teams.service';


@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    HomePageComponent,
    TeamsComponent,
    NavigComponent,
    PlayerComponent,
    PositionsTableComponent,
    TeamProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
  ],
  providers: [TeamsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
