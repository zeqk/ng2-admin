import { Routes, RouterModule } from '@angular/router';

import { Users } from './users.component';
import { UsersListComponent } from './users-list';
import { UserDetailComponent, UserDetailResolver } from './user-detail';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Users,
    children: [
      { path: 'list', component: UsersListComponent },
      { path: 'new', component: UserDetailComponent },
      { 
        path: ':id', 
        component: UserDetailComponent, 
        resolve: {
          initialData: UserDetailResolver
        }
      }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
