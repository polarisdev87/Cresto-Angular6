import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContestComponent } from './contest.component';
import { UiModule } from '../../shared/module/ui/ui.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    RouterModule.forChild([
      {
        path: '', component: ContestComponent
      }
    ])
  ],
  declarations: [ContestComponent]
})
export class ContestModule { }
