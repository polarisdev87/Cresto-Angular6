import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyComponent } from './buy.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";
import { InstructionComponent } from './instruction/instruction.component';
import { BuyTokenFormComponent } from './buy-token-form/buy-token-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', component: BuyComponent}
    ]),
  ],
  declarations: [BuyComponent, InstructionComponent, BuyTokenFormComponent]
})
export class BuyModule { }
