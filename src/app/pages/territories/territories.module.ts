import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgaModule } from '../../theme/nga.module';

import { routing } from './territories.routing';
import { Territories } from './territories.component';
import { ListComponent } from './list/list.component';
import { TerritoriesService } from './services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    Territories,
    ListComponent
  ],
  providers: [
    TerritoriesService
  ]
})
export class TerritoriesModule { }
