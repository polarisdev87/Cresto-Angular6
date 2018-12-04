import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AffiliatesComponent } from './affiliates.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UiModule } from '../../shared/module/ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    RouterModule.forChild([
      {
        path: '', component: AffiliatesComponent
      }
    ])
  ],
  declarations: [
    AffiliatesComponent,
    HeaderComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AffiliatesModule {
}
