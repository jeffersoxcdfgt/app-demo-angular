import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { teamCreateTeam } from '../store/actions/teams.actions';
import { Team } from  '../shared/team';


@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.css']
})
export class TeamCreateComponent implements OnInit {
  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  AddTeam():void{
      console.log('AddTeam')
      const team:Team = {
        id:3,
        teamName:'Equipo agregado',
        Assignee:'Equipo agregado',
        Priority:'Equipo agregado',
        Deadline:'Equipo agregado',
        State:'Equipo agregado'
      }
      this.store.dispatch(teamCreateTeam({team}));
  }
}
