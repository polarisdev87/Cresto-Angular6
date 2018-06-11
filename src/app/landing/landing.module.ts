import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LandingComponent],
  schemas: [ NO_ERRORS_SCHEMA ],
})
export class LandingModule { }
