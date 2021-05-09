import { InMemoryDbService } from 'angular-in-memory-web-api';

export class AppInMemoryApi  implements InMemoryDbService{
      createDb(){
        return {
          'teams':[
            {
              'id':1,
              'teamName':'Team 1',
              'Assignee':'Jefferson Medina',
              'Priority':'Normal',
              'Deadline':'2019-10-10',
              'State':'Completed'
            },
            {
              'id':2,
              'teamName':'Team 2',
              'Assignee':'Jefferson Medina 3',
              'Priority':'Normal',
              'Deadline':'2019-11-11',
              'State':'Completed'
            }
          ]
        }
    }
}
