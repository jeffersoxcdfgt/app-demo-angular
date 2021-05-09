import * as fromTeams from './teams/store/reducers/teams.reducers';

export interface AppState {
  teams:fromTeams.State;
}
