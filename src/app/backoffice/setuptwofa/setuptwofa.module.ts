import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupTwoFaComponent } from './setuptwofa.component';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: SetupTwoFaComponent}
    ]),
    FormsModule
  ],
  declarations: [SetupTwoFaComponent]
})
export class SetupTwoFaModule {
}
