import {  AppAction } from '../../../app.action';
import { createFeatureSelector , createSelector, on , createReducer , Action  } from '@ngrx/store';
import { Team } from '../../shared/team';
import  * as teamActions from '../actions/teams.actions';
import { RouterReducerState} from '@ngrx/router-store';

export interface State {
  data:Team[];
  selected:Team;
  action:string;
  done:boolean;
  error?:Error;
}

const initialState: State  = {
  data:[],
  selected:null,
  action:null,
  done:false,
  error:null
}

const teamsdReducer = createReducer(
  initialState,
  //List Team
  on(teamActions.teamGetAll, state => ({ ...state, action:teamActions.TeamsActionTypes.GET_TEAMS, done:false, selected:null, error:null })),
  on(teamActions.teamGetAllSuccess, (state, { teams }) => ({ ...state, data:teams, done:true, selected:null, error:null })),
  on(teamActions.teamGetAllError, (state, { err }) => ({...state, done:true, selected:null, error:err})),
  //Create Team
  on(teamActions.teamCreateTeam, (state, { team }) => ({ ...state, selected: team, action: teamActions.TeamsActionTypes.CREATE_TEAM, done: false, error:  null})),
  on(teamActions.teamCreateTeamSuccess, (state, { team }) => ({...state, data:[...state.data, { ...state.selected, id: team['id'] }], selected: null, done: true,})),
  on(teamActions.teamGetAllError, (state, { err }) => ({...state, done:true, selected:null, error:err})),
  //Update team
  on(teamActions.teamUpdateTeam, (state, { team }) => ({ ...state, selected: team, action: teamActions.TeamsActionTypes.UPDATE_TEAM, done: false, error:  null })),
  on(teamActions.teamUpdateTeamSuccess, state => ({...state, data:[...state.data.slice(0,(state.data.findIndex(h => h.id === state.selected.id))), state.selected, ...state.data.slice((state.data.findIndex(h => h.id === state.selected.id)) + 1)], done: true, selected: null, error: null })),
  on(teamActions.teamUpdateTeamError, (state, { err }) => ({...state, done:true, selected:null, error:err})),
  //Get team
  on(teamActions.teamGetTeam, state => ({ ...state, action:teamActions.TeamsActionTypes.GET_TEAM, done:false, selected:null, error:null })),
  on(teamActions.teamGetTeamSuccess, (state, { team }) => ({ ...state, selected:team, done: true, error:  null})),
  on(teamActions.teamGetTeamError, (state, { err }) => ({ ...state, done:true, selected:null, error:err })),
  //Delete team
  on(teamActions.teamDeleteTeam, (state, { team }) => ({...state, selected:state.data.find(h => h.id === team), action: teamActions.TeamsActionTypes.DELETE_TEAM, done: false, error:null })),
  on(teamActions.teamDeleteTeamSuccess, state => ({ ...state, data: state.data.filter( h => h.id !== state.selected.id), selected: null, error: null, done: true  })),
  on(teamActions.teamDeleteTeamError, (state, { err }) => ({...state, selected: null, done:true, error:err })),
);

export function reducer(state: State | undefined, action: AppAction) {
  return teamsdReducer(state, action);
}
export const getTeamsState = createFeatureSelector < State > ('teams');

//Selector for list teams

export const getAllTeams = createSelector( getTeamsState , (state: State ) => state.data);
export const getTeamsError = createSelector(getTeamsState, (state: State) => {
  return state.action === teamActions.TeamsActionTypes.GET_TEAMS
    ? state.error
   : null;
});


//Selector for create

export const isCreated =  createSelector( getTeamsState , ( state: State ) =>
  state.action === teamActions.TeamsActionTypes.CREATE_TEAM && state.done && !state.error);

export const getCreateError = createSelector( getTeamsState , (state: State) => {
      return state.action === teamActions.TeamsActionTypes.CREATE_TEAM
       ? state.error
       : null;
});


//Selector for update

export const isUpdated = createSelector(getTeamsState , (state : State ) =>
  state.action === teamActions.TeamsActionTypes.UPDATE_TEAM  && state.done && !state.error);

export const getUpdateError = createSelector(getTeamsState, (state: State) => {
      return state.action === teamActions.TeamsActionTypes.UPDATE_TEAM
        ? state.error
       : null;
    });

//Selector for Get Teams

export const getTeam = createSelector( getTeamsState , ( state : State ) => {
  if(state.action ===  teamActions.TeamsActionTypes.GET_TEAM && state.done){
    return state.selected;
  } else{
    return null;
  }
});

export const getTeamError = createSelector(getTeamsState, (state: State) => {
  return state.action === teamActions.TeamsActionTypes.GET_TEAM
    ? state.error
   : null;
});

//Selector for Delete Team

export const isDeleted = createSelector(getTeamsState , (state: State) =>
  state.action === teamActions.TeamsActionTypes.DELETE_TEAM && state.done && !state.error);

export const getDeleteError = createSelector(getTeamsState, (state: State) => {
  return state.action === teamActions.TeamsActionTypes.DELETE_TEAM_SUCCESS
    ? state.error
   : null;
});
