import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamsService } from '../../services/teams.service';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  player: any[] =[];
  constructor(private teamsService: TeamsService,
    private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.actRoute.params.subscribe(
      (params) =>{this.teamsService.getPlayerID(params.id)
        .subscribe(
          (info) => {this.player = info['players'];
        }
        );
      }
    );
  }
}
       