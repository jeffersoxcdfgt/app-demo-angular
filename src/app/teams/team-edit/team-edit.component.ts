import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { teamUpdateTeam } from '../store/actions/teams.actions';
import { Team } from  '../shared/team';

@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.css']
})
export class TeamEditComponent implements OnInit {

  constructor( private store: Store<AppState>) { }
  ngOnInit(): void {
  }

  UpdateTeam(){
    console.log('UpdateTeam')
    const team:Team = {
      id:1,
      teamName:'Jefferson Medina',
      Assignee:'Jefferson Medina',
      Priority:'Jefferson Medina',
      Deadline:'Jefferson Medina',
      State:'Jefferson Medina'
    }
    this.store.dispatch(teamUpdateTeam({team}));
  }

}
