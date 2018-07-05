import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BackofficeComponent} from './backoffice.component';
import {BackofficeFooterComponent} from './backoffice-footer/backoffice-footer.component';
import {BackofficeHeaderComponent} from './backoffice-header/backoffice-header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {ScrollbarModule} from 'ngx-scrollbar';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {AclEffects} from './store/effects/acl.effects';
import {reducers} from './store/reducers';
import {routes} from './routes';
import {SharedModule} from './shared/shared.module';
import {UiModule} from '../shared/module/ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UiModule,
    ScrollbarModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('backoffice', reducers),
    EffectsModule.forFeature([AclEffects]),
  ],
  declarations: [BackofficeComponent, SidebarComponent, BackofficeHeaderComponent, BackofficeFooterComponent]
})
export class BackofficeModule {
}
