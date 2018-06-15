import {NO_ERRORS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingComponent} from './landing.component';
import {RouterModule} from "@angular/router";
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: LandingComponent
      }
    ])
  ],
  declarations: [LandingComponent, HeaderComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class LandingModule {
}
