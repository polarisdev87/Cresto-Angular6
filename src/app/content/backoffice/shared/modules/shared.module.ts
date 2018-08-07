import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { BackofficeTableComponent } from './components/backoffice-table/backoffice-table.component';
import { TimerComponent } from './components/timer/timer.component';
import { RowPipe } from './components/backoffice-table/row.pipe';
import { ScrollbarModule } from 'ngx-scrollbar';
import { NgAclDirective } from './directives/ngAcl.directive';
import { CopypasteDirective } from './directives/copypaste.directive';
import { LableDirective } from './directives/lable.directive';
import { TelegramPopupComponent } from './components/telegram-popup/telegram-popup.component';

@NgModule({
  imports: [
    CommonModule,
    ScrollbarModule
  ],
  declarations: [
    NgAclDirective,
    LableDirective,
    CopypasteDirective,
    BackofficeTableComponent,
    ButtonComponent,
    TimerComponent,
    RowPipe,
    TelegramPopupComponent
  ],
  exports: [
    BackofficeTableComponent,
    ButtonComponent,
    TimerComponent,
    NgAclDirective,
    CopypasteDirective,
    LableDirective,
    TelegramPopupComponent
  ]
})
export class SharedModule {
}
