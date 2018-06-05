import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangepasswordComponent } from './changepassword.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ChangepasswordComponent}
    ]),
    FormsModule
  ],
  declarations: [ChangepasswordComponent]
})
export class ChangepasswordModule { }
