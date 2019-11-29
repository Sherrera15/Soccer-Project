import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../../services/teams.service';


@Component({
  selector: 'app-positions-table',
  templateUrl: './positions-table.component.html',
  styleUrls: ['./positions-table.component.css']
})
export class PositionsTableComponent implements OnInit {
  ptable: any[] = [];

  constructor(private teamsService: TeamsService) { }

  ngOnInit() {
    this.teamsService.getPositionsTable().subscribe(
      (info)=>{this.ptable=info['ptable']}
    );
  }

}
