import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerifytwofactorComponent } from './verifytwofactor.component';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: VerifytwofactorComponent}
    ]),
    FormsModule
  ],
  declarations: [VerifytwofactorComponent]
})
export class VerifytwofactorModule {
}
