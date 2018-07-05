import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComingsoonComponent } from './comingsoon.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ComingsoonComponent}
    ]),
  ],
  declarations: [ComingsoonComponent]
})
export class ComingsoonModule { }
