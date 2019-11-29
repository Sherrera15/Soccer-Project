import { Component, OnInit } from '@angular/core';
import { TeamsService }  from '../../services/teams.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams:any=[];
  favorit: any=[];
  constructor(private teamService: TeamsService) { }

  ngOnInit() {
    
    this.getTeams();
    this.gFavorite();
  }

  getTeams(){
    this.teamService.getTeams().subscribe(
      (info) => {
        this.teams = info['teams'];
      }
    );
    }

  gFavorite(){

    if(localStorage.length != 0){
      this.favorit =  JSON.parse(localStorage.getItem('fav'));
      console.log(this.favorit) 
    }

  } 
  
  
  delete(id){
    for(let i=0; i<this.favorit.length;i++){
      if(this.favorit[i].idTeam == id){
        this.favorit.splice(i,1);
        localStorage.setItem('fav',JSON.stringify(this.favorit));
      }
    }
  }
  fav(id){
    this.teams = this.teams || [];
    this.teams.forEach(team => { if(team.idTeam == id){
      this.favorit.push(team);
      localStorage.setItem('fav',JSON.stringify(this.favorit));
    }
      
    });
    let aux = 0;
    let i;
    for(i = 0; i<this.favorit.length; i++){
      if(this.favorit[i].idTeam==id){
        aux++;
      }
    }

    if(aux>=2){
      this.favorit.pop(); //Elimina el ultimo, en caso que ingresen varios.
      localStorage.setItem('fav',JSON.stringify(this.favorit));
    }
  }
  

}
