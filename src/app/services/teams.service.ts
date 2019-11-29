import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { PositionsTableComponent } from '../components/positions-table/positions-table.component';
import { ThrowStmt } from '@angular/compiler';




@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private httpClient : HttpClient) { }
 
/* Información traida de una API */
 getDetailsEventsID(id){
    return this.httpClient.get('https://www.thesportsdb.com/api/v1/json/1/lookupevent.php?id=' + id);
  }
  
  getPositionsTable(){
    return this.httpClient.get('https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4328&s=1920');
  }

  getSeasonEvents(){
    return this.httpClient.get('https://www.thesportsdb.com/api/v1/json/1/eventsseason.php?id=4328&s=1920');
  }

  getNextFiveEventsID(id){
    return this.httpClient.get('https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=' + id);
  }

  getLastFiveEventsID(id){
    return this.httpClient.get('https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id='+ id);
  }

  getPlayerTeamID(id){
    return this.httpClient.get('https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id='+ id);
  }

  getPlayerID(id){
    return this.httpClient.get('https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=' + id);
  }

  getTeams() {
    return this.httpClient.get('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League');
  }

  getTeamsID(id){
    return this.httpClient.get('https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=' + id);
  }
}
