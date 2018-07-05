import { NgAclDirective } from './../../directives/ngAcl.directive';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../../backoffice/sidebar/sidebar.component';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material';
import { HeaderAuthComponent } from './header-auth/header-auth.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';
import { BackofficeTableComponent } from './backoffice-table/backoffice-table.component';
import { RowPipe } from './backoffice-table/row.pipe';
import { ScrollbarModule } from 'ngx-scrollbar';
import { TimerComponent } from './timer/timer.component';
import { BuyInstructionComponent } from './buy-instruction/buy-instruction.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    ScrollbarModule
  ],
  declarations: [
    NgAclDirective,
    HeaderAuthComponent,
    FooterComponent,
    BackofficeTableComponent,
    RowPipe,
    ButtonComponent,
    TimerComponent,
    BuyInstructionComponent
  ],
  exports: [
    NgAclDirective,
    MatDialogModule,
    HeaderAuthComponent,
    FooterComponent,
    BackofficeTableComponent,
    ButtonComponent,
    TimerComponent,
    BuyInstructionComponent
  ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}]
})
export class UiModule {
}
