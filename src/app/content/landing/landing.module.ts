import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { WhatTokenComponent } from './what-token/what-token.component';
import { WhyTokenComponent } from './why-token/why-token.component';
import { WhatMakesComponent } from './what-makes/what-makes.component';
import { PrototypeComponent } from './prototype/prototype.component';
import { TokenAllocationComponent } from './token-allocation/token-allocation.component';
import { MilestonesComponent } from './milestones/milestones.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { TokenSaleComponent } from './token-sale/token-sale.component';
import { TeamComponent } from './team/team.component';
import { ParticipateComponent } from './participate/participate.component';
import { MembersComponent } from './members/members.component';
import { StatusComponent } from './status/status.component';
import { VideoComponent } from './video/video.component';
import { PressComponent } from './press/press.component';
import { FaqComponent } from './faq/faq.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { UiModule } from '../../shared/module/ui/ui.module';

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
    AboutComponent,
    WhatTokenComponent,
    WhyTokenComponent,
    WhatMakesComponent,
    PrototypeComponent,
    TokenAllocationComponent,
    MilestonesComponent,
    RoadmapComponent,
    TokenSaleComponent,
    ParticipateComponent,
    MembersComponent,
    TeamComponent,
    StatusComponent,
    VideoComponent,
    FaqComponent,
    SubscribeComponent,
    PressComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class LandingModule {
}
