import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './territories.routing';
import { Territories } from './territories.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    Territories,
    ListComponent
  ]
})
export class TerritoriesModule { }
