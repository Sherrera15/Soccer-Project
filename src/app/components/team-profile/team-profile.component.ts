import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../../services/teams.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-team-profile',
  templateUrl: './team-profile.component.html',
  styleUrls: ['./team-profile.component.css']
})
export class TeamProfileComponent implements OnInit {
  players: any[] = [];
  teams: any[] = [];
  nextEvents: any[] = [];
  lastEvents: any[] = [];
  positions: any[] = [];
  id: any[] = [];
  seasone: any[] = [];
  seasoneventID: any[] = [];
  ptable: any[] = [];


  constructor(private teamsService: TeamsService,
    private actRoute: ActivatedRoute) { }

  ngOnInit() {

    const params = this.actRoute.snapshot.params;

    this.actRoute.params.subscribe(
      (params) =>{this.teamsService.getTeamsID(params.id)
        .subscribe(
          (info) => {this.teams = info['teams'];
        }
        );
        this.teamsService.getPlayerTeamID(params.id)
        .subscribe(
          (info) => {this.players = info['player'];
        }
        );
        this.teamsService.getLastFiveEventsID(params.id)
        .subscribe(
          (info) => {this.lastEvents = info['results'];
        }
        );
        this.teamsService.getNextFiveEventsID(params.id)
        .subscribe(
          (info) => {this.nextEvents = info['events'];
        }
        );
        this.teamsService.getPositionsTable()
        .subscribe(
          (info) => {this.positions = info['table'];
        }
        );
        this.teamsService.getSeasonEvents()
        .subscribe(
          (info) => {this.seasone = info['events'];
          this.seasone.forEach(seasone => {
            if (seasone.idHomeTeam == this.id  || seasone.idAwayTeam == this.id){
              this.seasoneventID.push(seasone);
            }
           
          });

        }
        );
        this.teamsService.getPositionsTable().subscribe(
          (info)=>{this.ptable=info['ptable']}
        );


      }
    )

  }

}
