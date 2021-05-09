import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { Team } from '../shared/team';
import { Observable , from } from 'rxjs';
import { tap , distinct , toArray} from 'rxjs/operators';
import  * as  teamsActions from '../store/actions/teams.actions';
import { getAllTeams } from '../store/reducers/teams.reducers';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  title = 'List Of teams';
  teams : Observable<Team[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.teams = this.store.select(getAllTeams);
    this.teams.subscribe( data =>{
        console.log("mis datos")
        console.log(data);
    });
  }

  /**
   * Delete the selected game
   * @param {number} id the game id
   */
  DeleteTeam(id:number){
    console.log('DeleteTeam')
    if (confirm('Are you sure do you want to delete this Team?')) {
      this.store.dispatch(teamsActions.teamDeleteTeam({team:id}));
    }
  }
}
