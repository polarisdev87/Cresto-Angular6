import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialVideoComponent } from './special-video.component';
import { UiModule } from '../../shared/module/ui/ui.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    RouterModule.forChild([
      {
        path: '', component: SpecialVideoComponent
      }
    ])
  ],
  declarations: [SpecialVideoComponent]
})
export class SpecialVideoModule { }
