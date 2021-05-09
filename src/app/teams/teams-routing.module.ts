import { NgModule   } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

//components
import { TeamsComponent } from './teams.component';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamCreateComponent } from './team-create/team-create.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamEditComponent } from './team-edit/team-edit.component';

const teamsRoutes : Routes  =  <Routes>[{
  path:'',
  component :TeamsComponent,
  children:[
    { path:'' , component:  TeamListComponent },
    { path:'detail/:id' , component: TeamDetailComponent  },
    { path:'create' , component:  TeamCreateComponent },
    { path:'edit/:id',  component: TeamEditComponent}
  ]
}];

@NgModule({
  imports:[
    RouterModule.forChild(teamsRoutes)
  ],
  exports:[RouterModule]
})
export class TeamsRoutingModule {
}

export const teamsRoutedComponents = [
  TeamsComponent,
  TeamListComponent,
  TeamCreateComponent,
  TeamDetailComponent,
  TeamEditComponent
]
