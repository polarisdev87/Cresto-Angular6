import { NgAclDirective } from './../../directives/ngAcl.directive';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material';
import { HeaderAuthComponent } from './header-auth/header-auth.component';
import { FooterComponent } from './footer/footer.component';
import { BackofficeHeaderComponent } from './backoffice-header/backoffice-header.component';
import { BackofficeTableComponent } from './backoffice-table/backoffice-table.component';
import { RowPipe } from './backoffice-table/row.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule
  ],
  declarations: [
    SidebarComponent,
    NgAclDirective,
    HeaderAuthComponent,
    FooterComponent,
    BackofficeHeaderComponent,
    BackofficeTableComponent,
    RowPipe
  ],
  exports: [
    SidebarComponent,
    NgAclDirective,
    MatDialogModule,
    HeaderAuthComponent,
    FooterComponent,
    BackofficeHeaderComponent,
    BackofficeTableComponent
  ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}]
})
export class UiModule {
}
