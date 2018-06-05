import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditProfileComponent} from './editprofile.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: EditProfileComponent}
    ]),
    FormsModule
  ],
  declarations: [EditProfileComponent]
})
export class EditProfileModule {
}
