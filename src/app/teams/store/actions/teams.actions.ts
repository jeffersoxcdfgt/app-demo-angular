import { createAction, props } from '@ngrx/store';
import { Team } from '../../shared/team';

export enum TeamsActionTypes {
  GET_TEAMS = '[All] Teams',
  GET_TEAMS_SUCCESS = '[ALL] Teams Success',
  GET_TEAMS_ERROR = '[All] Teams Error',
  CREATE_TEAM ='[Create] Team',
  CREATE_TEAM_SUCCESS = '[Create] Team Sucess',
  CREATE_TEAM_ERROR = '[Create] Team Error',
  UPDATE_TEAM = '[Update] Team',
  UPDATE_TEAM_SUCCESS = '[Update] Team Success',
  UPDATE_TEAM_ERROR = '[Update] Team Error',
  GET_TEAM = '[GET] Team',
  GET_TEAM_SUCCESS = '[GET] Team Succes',
  GET_TEAM_ERROR = '[GET] Team Error',
  DELETE_TEAM = '[Delete] Team',
  DELETE_TEAM_SUCCESS = '[Delete] Team Success',
  DELETE_TEAM_ERROR = '[Delete] Team Error'
}

//list Teams

export const teamGetAll = createAction(TeamsActionTypes.GET_TEAMS);
export const teamGetAllSuccess = createAction(TeamsActionTypes.GET_TEAMS_SUCCESS, props<{teams: Team[]}>());
export const teamGetAllError = createAction(TeamsActionTypes.GET_TEAMS_ERROR, props<{err: Error}>());

//Create teams

export const teamCreateTeam = createAction(TeamsActionTypes.CREATE_TEAM, props<{team: Team} >());
export const teamCreateTeamSuccess = createAction(TeamsActionTypes.CREATE_TEAM_SUCCESS, props<{team: number}>());
export const teamCreateTeamError = createAction(TeamsActionTypes.CREATE_TEAM_ERROR, props<{err: Error}>());

//Update team

export const teamUpdateTeam = createAction(TeamsActionTypes.UPDATE_TEAM, props<{team: Team} >());
export const teamUpdateTeamSuccess = createAction(TeamsActionTypes.UPDATE_TEAM_SUCCESS);
export const teamUpdateTeamError = createAction(TeamsActionTypes.UPDATE_TEAM_ERROR, props<{err: Error}>());

//Get Team
export const teamGetTeam = createAction(TeamsActionTypes.GET_TEAM, props<{team: number}>());
export const teamGetTeamSuccess = createAction(TeamsActionTypes.GET_TEAM_SUCCESS, props<{team: Team} >());
export const teamGetTeamError = createAction(TeamsActionTypes.GET_TEAM_ERROR, props<{err: Error}>());

//Delete Team
export const teamDeleteTeam = createAction(TeamsActionTypes.DELETE_TEAM, props<{team: number}>());
export const teamDeleteTeamSuccess = createAction(TeamsActionTypes.DELETE_TEAM_SUCCESS, props<{team: Team} >());
export const teamDeleteTeamError = createAction(TeamsActionTypes.DELETE_TEAM_ERROR, props<{err: Error}>());
