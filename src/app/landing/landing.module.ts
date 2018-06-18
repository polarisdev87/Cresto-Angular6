import {NO_ERRORS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingComponent} from './landing.component';
import {RouterModule} from "@angular/router";
import { HeaderComponent } from './header/header.component';
import { WhatTokenComponent } from './what-token/what-token.component';
import { WhyTokenComponent } from './why-token/why-token.component';
import { WhatMakesComponent } from './what-makes/what-makes.component';
import { TokenAllocationComponent } from './token-allocation/token-allocation.component';
import { RoadmapComponent } from './roadmap/roadmap.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: LandingComponent
      }
    ])
  ],
  declarations: [LandingComponent, HeaderComponent, WhatTokenComponent, WhyTokenComponent, WhatMakesComponent, TokenAllocationComponent, RoadmapComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class LandingModule {
}
