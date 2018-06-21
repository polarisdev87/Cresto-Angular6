import { NgAclDirective } from './../../directives/ngAcl.directive';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from "@angular/material";
import { HeaderAuthComponent } from './header-auth/header-auth.component';
import { FooterComponent } from "./footer/footer.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule
  ],
  declarations: [NavbarComponent, NgAclDirective, HeaderAuthComponent, FooterComponent],
  exports: [NavbarComponent, NgAclDirective, MatDialogModule, HeaderAuthComponent, FooterComponent],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}]
})
export class UiModule {
}
