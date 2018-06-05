import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {DisabletwofaComponent} from './disabletwofa.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: DisabletwofaComponent}
    ]),
    FormsModule
  ],
  declarations: [DisabletwofaComponent]
})
export class DisableTwoFaModule {
}
