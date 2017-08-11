import { Routes, RouterModule } from '@angular/router';

import { Territories } from './territories.component';
import { ListComponent } from './list';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Territories,
    children: [
      { path: 'list', component: ListComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
