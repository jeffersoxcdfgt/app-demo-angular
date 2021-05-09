import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType , Effect } from '@ngrx/effects';
import { EMPTY , of } from 'rxjs';
import { map, mergeMap, catchError , tap  } from 'rxjs/operators';
import { TeamsService } from '../services/teams.service';
import { Team } from '../../shared/team';
import { TeamsActionTypes } from '../actions/teams.actions';

@Injectable()
export class TeamEffects {

  //@Effect()
  public loadTeams$ = createEffect(() => this.actions$.pipe(
    ofType(TeamsActionTypes.GET_TEAMS),
    mergeMap(() => this.teamsService.findAll()
      .pipe(
        map((teams:Team[]) => ({ type: TeamsActionTypes.GET_TEAMS_SUCCESS, teams: teams })),
         catchError(err => of({ type: TeamsActionTypes.GET_TEAMS_ERROR, err: err }))
      ))
    )
  );


  //@Effect()
  public createTeams$ = createEffect(() => this.actions$.pipe(
    ofType(TeamsActionTypes.CREATE_TEAM),
    mergeMap((team) => this.teamsService.insert(team)
      .pipe(
        map((team:Team) => ({ type: TeamsActionTypes.CREATE_TEAM_SUCCESS, team: team })),
          catchError(err => of({ type: TeamsActionTypes.CREATE_TEAM_ERROR, err: err }))
      ))
    )
  );


  //@Effect()
  public updateTeams$ = createEffect(() => this.actions$.pipe(
    ofType(TeamsActionTypes.UPDATE_TEAM),
    mergeMap((team) => this.teamsService.update(team)
      .pipe(
        map((team:Team) => ({ type: TeamsActionTypes.UPDATE_TEAM_SUCCESS })),
          catchError(err => of({ type: TeamsActionTypes.UPDATE_TEAM_ERROR, err: err }))
      ))
    )
  );

  //@Effect()
  public getTeam$ = createEffect(() => this.actions$.pipe(
    ofType(TeamsActionTypes.GET_TEAM),
    mergeMap((team) => this.teamsService.findById(team)
      .pipe(
        map((team:Team) => ({ type: TeamsActionTypes.GET_TEAM_SUCCESS, team: team })),
          catchError(err => of({ type: TeamsActionTypes.GET_TEAM_ERROR, err: err }))
      ))
    )
  );

  //@Effect()
  public deleteTeam$ = createEffect(() => this.actions$.pipe(
    ofType(TeamsActionTypes.DELETE_TEAM),
    mergeMap((team) => this.teamsService.delete(team)
      .pipe(
        map((team:Team) => ({ type: TeamsActionTypes.DELETE_TEAM_SUCCESS, team: team })),
          catchError(err => of({ type: TeamsActionTypes.DELETE_TEAM_ERROR, err: err }))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private teamsService: TeamsService
  ) {}
}
