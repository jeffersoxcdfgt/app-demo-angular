import { Component , OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AppState } from '../app.state';
import { teamGetAll } from './store/actions/teams.actions';
import {
  getTeamsError ,
  isCreated ,
  getCreateError ,
  isUpdated ,
  getUpdateError ,
  getTeamError ,
  isDeleted,
  getDeleteError
} from './store/reducers/teams.reducers';

@Component({
  selector:'app-teams',
  template:`
  <router-outlet></router-outlet>`,
  styleUrls:['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor(private router: Router,private store :Store<AppState>){
  }

  ngOnInit(){

    this.store.select(getTeamsError).subscribe((error) => this.loadingError(error));
    this.store.dispatch(teamGetAll());


    this.store.select(getCreateError).subscribe((error) => this.loadingError(error));
    this.store.select(isCreated).subscribe((done) => {
        this.actionSuccess(done,'Insert Team Succesfull');
    });

    this.store.select(getUpdateError).subscribe((error) => this.actionError(error, 'Error while updating the Team'));
    this.store.select(isUpdated).subscribe((done) => {
      this.actionSuccess(done,'Update Team Succesfull');
    });

    this.store.select(getTeamError).subscribe((error) => this.actionError(error, 'Error while list one the Team'));


    this.store.select(getDeleteError).subscribe((error) => { this.actionError(error, 'Error while deleting the Team');  });
    this.store.select(isDeleted).subscribe((done) => {
        this.actionSuccess(done,'Delete Team Succesfull');
    });


  }

  /**
   * Display error message if load of teams fails
   */
  loadingError(error) {
    if (error) {
      alert('Error while loading the list of teams');
    }
  }

  /**
   * Display success message after execute specific action over the team
   * @param done true if action was completed or false
   * @param message the message to be displayed
   */
  actionSuccess(done: boolean, message: string) {
    if (done) {
      alert(message);
      this.router.navigate(['/teams']);
    }
  }

  /**
   * Display error message is execution of action fails
   * @param error the error thrown
   * @param message the message to be displayed
   */
  actionError(error, message: string) {
    if (error) {
      alert(message);
    }
  }

}
