import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderAuthComponent } from './header-auth/header-auth.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollbarModule } from 'ngx-scrollbar';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    MatMenuModule,
    ScrollbarModule
  ],
  declarations: [
    HeaderAuthComponent,
    FooterComponent,
  ],
  exports: [
    MatDialogModule,
    MatMenuModule,
    HeaderAuthComponent,
    FooterComponent,
  ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}]
})
export class UiModule {
}
