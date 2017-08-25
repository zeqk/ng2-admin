import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgaModule } from '../../theme/nga.module';

import { routing } from './users.routing';
import { Users } from './users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersService } from './users.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [Users, UsersListComponent],
  providers: [UsersService]
})
export class UsersModule { }
