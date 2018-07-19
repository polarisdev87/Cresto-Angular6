import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FAQComponent } from './faq.component';
import { UiModule } from '../../shared/module/ui/ui.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    RouterModule.forChild([
      {
        path: '', component: FAQComponent
      }
    ])
  ],
  declarations: [FAQComponent]
})
export class FAQModule { }
