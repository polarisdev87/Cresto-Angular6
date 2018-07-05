import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackofficeComponent } from './backoffice.component';
import { BackofficeFooterComponent } from './backoffice-footer/backoffice-footer.component';
import { BackofficeHeaderComponent } from './backoffice-header/backoffice-header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ScrollbarModule } from 'ngx-scrollbar';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/reducers';
import { routes } from './routes';
import { SharedModule } from './shared/modules/shared.module';
import { UiModule } from '../../shared/module/ui/ui.module';
import { AclService } from './acl.service';
import { AccessGuardService } from './access-guard.service';
import { effects } from './store/effects';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UiModule,
    ScrollbarModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('backoffice', reducers),
    EffectsModule.forFeature(effects),
  ],
  declarations: [BackofficeComponent, SidebarComponent, BackofficeHeaderComponent, BackofficeFooterComponent],
  providers: [
    AclService,
    AccessGuardService,
  ]
})
export class BackofficeModule {
}
