import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgaModule } from '../../theme/nga.module';
import { AppTranslationModule } from '../../app.translation.module';

import { routing } from './users.routing';
import { Users } from './users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersService } from './users.service';
import { UserDetailComponent, UserDetailResolver } from './user-detail';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgaModule,
    AppTranslationModule,
    routing
  ],
  declarations: [Users, UsersListComponent, UserDetailComponent],
  providers: [UsersService, UserDetailResolver]
})
export class UsersModule { }
