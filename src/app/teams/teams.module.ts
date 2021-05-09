import { NgModule , InjectionToken  } from '@angular/core';
import { TeamsService } from './store/services/teams.service';
import { teamsRoutedComponents , TeamsRoutingModule} from './teams-routing.module';
import { SharedModule } from '../shared/shared.module';

import { StoreModule , ActionReducerMap , ActionReducer, MetaReducer , StoreConfig , META_REDUCERS } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';

import { EffectsModule  } from '@ngrx/effects';
import { TeamEffects } from './store/effects/teams.effects';
import  * as teamsReducers from './store/reducers/teams.reducers';
import { TraceService } from '../shared/utils/traceService';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import {  AppState } from '../app.state';
import { teamsHook } from './store/webhooks/webhooks'

import { AppInMemoryApi } from '../app.in-memory.api';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

export const reducers: ActionReducerMap<any> = {
  teams:teamsReducers.reducer,
}

@NgModule({
  imports:[
    HttpClientInMemoryWebApiModule.forRoot(AppInMemoryApi),
    SharedModule,
    TeamsRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([TeamEffects]),
    NgSelectModule,
    FormsModule,
  ],
  declarations:[teamsRoutedComponents],
  providers:[
    TeamsService ,
    TraceService,
  /*  {
      provide: META_REDUCERS,
      deps: [TraceService],
      useFactory: teamsHook,
      multi: true
    }*/
   ]
})
export class TeamsModule {

}
