import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import {UiModule} from "../shared/module/ui/ui.module";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    UiModule,
    RouterModule.forChild([
      {
        path: '', component: SignupComponent
      }
    ])
  ],
  declarations: [SignupComponent]
})
export class SignupModule { }
