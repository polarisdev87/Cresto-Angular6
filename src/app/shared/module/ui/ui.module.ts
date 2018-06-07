import { NgAclDirective } from './../../directives/ngAcl.directive';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule
  ],
  declarations: [NavbarComponent, NgAclDirective],
  exports: [NavbarComponent, NgAclDirective, MatDialogModule],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}]
})
export class UiModule {
}
