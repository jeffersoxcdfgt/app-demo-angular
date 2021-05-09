import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { Team } from '../shared/team';
import { getTeam } from '../store/reducers/teams.reducers';
import {  Observable  } from 'rxjs';
import {  teamGetTeam } from '../store/actions/teams.actions';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {

  team:Observable<Team>;

  constructor(private route: ActivatedRoute ,
              private store: Store<AppState>){
  }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
        this.store.dispatch(teamGetTeam(params['id']))
    });

    this.team=this.store.select(getTeam);
    this.team.subscribe((data)=>{
          console.log(data)
    })
  }

}
