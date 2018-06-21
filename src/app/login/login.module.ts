import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxLoaderIndicatorModule } from 'ngx-loader-indicator';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { UiModule } from '../shared/module/ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxLoaderIndicatorModule.forRoot(),
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    UiModule,
    RouterModule.forChild([
      {
        path: '', component: LoginComponent
      }
    ])
  ],
  declarations: [LoginComponent]
})
export class LoginModule {
}
