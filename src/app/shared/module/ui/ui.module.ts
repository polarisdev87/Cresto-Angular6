import { NgAclDirective } from './../../directives/ngAcl.directive';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material';
import { HeaderAuthComponent } from './header-auth/header-auth.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule
  ],
  declarations: [SidebarComponent, NgAclDirective, HeaderAuthComponent, FooterComponent],
  exports: [SidebarComponent, NgAclDirective, MatDialogModule, HeaderAuthComponent, FooterComponent],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}]
})
export class UiModule {
}
