import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TeamComponent } from './team.component';
import { ReferralsComponentComponent } from './referrals-component/referrals-component.component';
import { ResourcesComponentComponent } from './resources-component/resources-component.component';
import { RouterModule } from '@angular/router';
import { NgxLoaderIndicatorModule } from 'ngx-loader-indicator';
import { SharedModule } from '../../shared/modules/shared.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { NguCarouselModule } from '@ngu/carousel';
import { effects } from './store/effects';
import { TeamService } from './team.service';
import { BannerAdsComponent } from './resources-component/banner-ads/banner-ads.component';
import { TextAdsComponent } from './resources-component/text-ads/text-ads.component';
import { EmailCreativesComponent } from './resources-component/email-creatives/email-creatives.component';
import { TrafficResourcesComponent } from './resources-component/traffic-resources/traffic-resources.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    StoreModule.forFeature('referrals', reducers),
    EffectsModule.forFeature(effects),
    RouterModule.forChild([
      {path: '', component: TeamComponent}
    ]),
    NgxLoaderIndicatorModule.forRoot(),
    NguCarouselModule
  ],
  declarations: [TeamComponent, ReferralsComponentComponent,
                ResourcesComponentComponent, BannerAdsComponent,
                TextAdsComponent, EmailCreativesComponent, TrafficResourcesComponent],
  providers: [TeamService]
})
export class TeamModule {
}
