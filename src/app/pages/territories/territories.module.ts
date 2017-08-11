import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './territories.routing';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [ListComponent]
})
export class TerritoriesModule { }
