import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../../services/teams.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: any;
  detailsid :any;
  

  constructor(private teamsService: TeamsService,
    private actRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.actRoute.snapshot.params;
    this.id = params.id;

    this.teamsService.getDetailsEventsID(params.id)
        .subscribe(
          (info) => {this.detailsid = info['events'];
        }
        );
  }

}
