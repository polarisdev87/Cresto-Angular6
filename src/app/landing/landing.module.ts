import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { WhatTokenComponent } from './what-token/what-token.component';
import { WhyTokenComponent } from './why-token/why-token.component';
import { WhatMakesComponent } from './what-makes/what-makes.component';
import { TokenAllocationComponent } from './token-allocation/token-allocation.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { TokenSaleComponent } from './token-sale/token-sale.component';
import { TeamComponent } from './team/team.component';
import { ParticipateComponent } from './participate/participate.component';
import { MembersComponent } from './members/members.component';
import { UiModule } from '../shared/module/ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    RouterModule.forChild([
      {
        path: '', component: LandingComponent
      }
    ])
  ],
  declarations: [
    LandingComponent,
    HeaderComponent,
    WhatTokenComponent,
    WhyTokenComponent,
    WhatMakesComponent,
    TokenAllocationComponent,
    RoadmapComponent,
    TokenSaleComponent,
    ParticipateComponent,
    MembersComponent,
    TeamComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class LandingModule {
}
