import {UiModule} from '../shared/module/ui/ui.module';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BackofficeComponent} from './backoffice.component';
import {BackofficeFooterComponent} from './backoffice-footer/backoffice-footer.component';
import {BackofficeHeaderComponent} from './backoffice-header/backoffice-header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {routes} from './routes';
import {ScrollbarModule} from 'ngx-scrollbar';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    ScrollbarModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BackofficeComponent, SidebarComponent, BackofficeHeaderComponent, BackofficeFooterComponent]
})
export class BackofficeModule {
}
