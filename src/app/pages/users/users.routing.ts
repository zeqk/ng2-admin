import { Routes, RouterModule } from '@angular/router';

import { Users } from './users.component';
import { UsersListComponent } from './users-list';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Users,
    children: [
      { path: 'list', component: UsersListComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
