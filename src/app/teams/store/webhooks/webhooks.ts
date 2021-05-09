import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { reducer } from '../reducers/teams.reducers';
import { TeamsActionTypes } from '../actions/teams.actions';
import {  AppState } from '../../../app.state';
import { TraceService } from '../../../shared/utils/traceService';

export function teamsHook(traceService: TraceService): MetaReducer<AppState> {
 return (reducer: ActionReducer<AppState, any>): ActionReducer<AppState, any> => {
    return (state, action) => {
      arrayFunc[action.type](state,action,traceService)
      return reducer(state, action);
    };
  }
}

export const initStore = ((currentstate, currentaction ,traceService ) =>{})
export const getWebHookTeams = ((currentstate, currentaction,traceService) => {
    traceService.logMetaReducers();
})
export const arrayFunc = {
  '@ngrx/store/init':initStore,
  '@ngrx/effects/init':initStore,
  '[ALL] Teams Success':initStore,
  '[All] Teams':getWebHookTeams
}
