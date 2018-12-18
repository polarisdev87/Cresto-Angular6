import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TeamComponent } from './team.component';
import { RouterModule } from '@angular/router';
import { NgxLoaderIndicatorModule } from 'ngx-loader-indicator';
import { SharedModule } from '../../shared/modules/shared.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { NguCarouselModule } from '@ngu/carousel';
import { effects } from './store/effects';
import { TeamService } from './team.service';
import { ReferralsComponent } from './referrals/referrals.component';
import { BannerAdsComponent } from './banner-ads/banner-ads.component';
import { TextAdsComponent } from './text-ads/text-ads.component';
import { TrafficResourcesComponent } from './traffic-resources/traffic-resources.component';

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
  declarations: [TeamComponent, ReferralsComponent, BannerAdsComponent,
                TextAdsComponent, TrafficResourcesComponent],
  providers: [TeamService]
})
export class TeamModule {
}
