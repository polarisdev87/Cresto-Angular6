import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyComponent } from './buy.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: BuyComponent}
    ]),
    FormsModule
  ],
  declarations: [BuyComponent]
})
export class BuyModule { }
